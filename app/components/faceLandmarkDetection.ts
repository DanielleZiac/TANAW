import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import * as tf from "@tensorflow/tfjs"
import * as bodyPix from "@tensorflow-models/body-pix"
import '@tensorflow/tfjs-backend-webgl';


// di pa sure yung mga threshold
const earThreshold = 0.21;
const sideEyeRightThreshold = 21;
const sideEyeLeftThreshold = 10.5;
// let model;
let is_leftEyeClose = false;
let is_rightEyeClose = false;
let mouth = "";
let leftBrow;
let rightBrow;
let eyePos;
var intervalId;
var intervals = new Array();


export async function runFacemesh(
	video: HTMLVideoElement, 
	setStatus: React.Dispatch<React.SetStateAction<boolean>>, 
	setLeftEye: React.Dispatch<React.SetStateAction<string>>, 
	setSmile: React.Dispatch<React.SetStateAction<string>>) {
		const model = await faceLandmarksDetection.load(
		faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
		{ maxFaces: 1 }
		);

		intervalId = setInterval(() => {
			startPrediciton(model, video, setStatus, setLeftEye, setSmile);
		}, 100)
		intervals.push(intervalId)
}


// merge ear functions into one
function euclidean(x2: number, x1:  number, y2: number, y1: number) {
	return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
}


function getEAR(upper: Array<Array<number>>, lower: Array<Array<number>>) {
	return (
		(euclidean(upper[2][0], lower[3][0], upper[2][1], lower[3][1]) 
			+ euclidean(upper[4][0], lower[3][0], upper[4][1], lower[3][1])) 
		/ (2 * (euclidean(lower[0][0], lower[8][0], lower[0][1], lower[8][1])))
	)
}


function getMAR(upperLip: Array<Array<number>>, lowerLip: Array<Array<number>>) {
	return (
		(euclidean(upperLip[5][0], lowerLip[5][0], upperLip[5][1], lowerLip[5][1]))
		/ (1 * euclidean(upperLip[0][0], upperLip[10][0], upperLip[0][1], upperLip[10][1]))
	)
}


function getBrow(upperBrow: Array<Array<number>>, eye: Array<Array<number>>) {
	return (
		euclidean(upperBrow[6][0], eye[8][0], upperBrow[6][1], eye[8][1]) /
		euclidean(upperBrow[6][0], upperBrow[2][0], upperBrow[6][1], upperBrow[2][1])
		// euclidean(upper[2][0], lower[3][0], upper[2][1], lower[3][1]) 
		// / (euclidean(lower[0][0], lower[8][0], lower[0][1], lower[8][1])
	)
}


async function startPrediciton(
	model: any, 
	video: HTMLVideoElement, 
	setStatus: React.Dispatch<React.SetStateAction<boolean>>, 
	setLeftEye: React.Dispatch<React.SetStateAction<string>>, 
	setSmile: React.Dispatch<React.SetStateAction<string>>
	) {
	// Sending video to model for prediction
	const predictions = await model.estimateFaces({
		input: video
	});

	// may nadetect na face
	// console.log(predictions)
	// intervals.push(intervalId)
	// console.log(intervalId, intervals)
	// console.log(video.srcObject.active)
	// console.log(eye.current)

	if (video.srcObject !== null && video.srcObject instanceof MediaStream) {
		if (video.srcObject.active) {
			if (predictions.length > 0) {
				predictions.forEach((prediction: any) => {
					eyeClosed(prediction);
					sideEye(prediction);
					smile(prediction);
					eyeBrow(prediction);
				}) 
	
				if (is_leftEyeClose && is_rightEyeClose) {
					setLeftEye("eyes_closed")
				} else if (is_leftEyeClose){
					setLeftEye("righteye_opened")
				} else if (is_rightEyeClose) {
					setLeftEye("lefteye_opened")
				} else {
					setLeftEye("eyes_opened")
				}
	
				if(mouth) {
					setSmile(mouth)
				}
	
	
				setStatus(true)
			} else {
				setStatus(false)
			}
		} else {
			console.log("terminating loop")
	
			for (let i = 0; i < intervals.length; i++) {
				clearInterval(intervals[i])
			}
			intervals = []
		}
	}
	// drawMesh(predictions);
}


function eyeClosed(prediction: { annotations: { rightEyeLower0: any; rightEyeUpper0: any; leftEyeUpper0: any; leftEyeLower0: any; }; }) {
	// right eye
	const rightEyeLower = prediction.annotations.rightEyeLower0;
	const rightEyeUpper = prediction.annotations.rightEyeUpper0;

	// left eye
	const leftEyeUpper = prediction.annotations.leftEyeUpper0;
	const leftEyeLower = prediction.annotations.leftEyeLower0;

	// eye aspect ratio
	const rightEAR = getEAR(rightEyeUpper, rightEyeLower);
	const leftEAR = getEAR(leftEyeUpper, leftEyeLower);

	is_leftEyeClose = leftEAR <= earThreshold;
	is_rightEyeClose = rightEAR <= earThreshold;
}


function sideEye(prediction: { annotations: { rightEyeLower0: number[][]; rightEyeIris: number[][]; leftEyeIris: number[][]; leftEyeLower0: number[][]; }; }) {
	if (!is_leftEyeClose && !is_rightEyeClose) {
		// di pa sure
		if (prediction.annotations.rightEyeLower0[8][0] - prediction.annotations.rightEyeIris[0][0] >= sideEyeRightThreshold ||
			prediction.annotations.leftEyeIris[0][0] - prediction.annotations.leftEyeLower0[8][0] <= sideEyeLeftThreshold) {
			eyePos = "right";
		} else if (prediction.annotations.rightEyeLower0[8][0] - prediction.annotations.rightEyeIris[0][0] <= sideEyeLeftThreshold ||
			prediction.annotations.leftEyeIris[0][0] - prediction.annotations.leftEyeLower0[8][0] >= sideEyeRightThreshold) {
			eyePos = "left";
		} else {
			eyePos = "normal";
		}
	}
}


function smile(prediction: { annotations: { lipsUpperInner: number[][]; lipsLowerInner: any; }; scaledMesh: number[][]; }) {
	const upperLip = prediction.annotations.lipsUpperInner
	const lowerLip = prediction.annotations.lipsLowerInner

	const smileMAR = getMAR(upperLip, lowerLip)

	let jaw_width = prediction.scaledMesh[288][0] - prediction.scaledMesh[58][0]
	let lips_width = prediction.annotations.lipsUpperInner[10][0] - prediction.annotations.lipsUpperInner[0][0]
	let lips_jaw_ratio = lips_width/jaw_width

	if(smileMAR < 0.083) {
		if (lips_jaw_ratio < 0.38) {
			mouth = "mouth_closed"
			console.log("normal")
		} else {
			mouth = "mouth_closed"
			console.log("close smile")
		}
	} else {
		if (lips_jaw_ratio < 0.40) {
			mouth = "mouth_opened"
			console.log("wow")
		} else {
			mouth = "mouth_opened"
			console.log("open smile")
		}
	}
}


// not workingg
function eyeBrow(prediction: { annotations: { leftEyebrowUpper: any; leftEyeLower3: any; rightEyebrowUpper: any; rightEyeLower0: any; }; }) {
	const leftEyeBrow = prediction.annotations.leftEyebrowUpper;
	const leftEyeLower = prediction.annotations.leftEyeLower3;

	const leftBAR = getBrow(leftEyeBrow, leftEyeLower);
	// console.log(leftBAR)

	// if (leftBAR > 0.49) {
	// 	console.log("left_raise")
	// } else if (leftBAR > 0.38) {
	// 	console.log("normal")
	// } else {
	// 	console.log("angry")
	// }

	const rightEyeBrow = prediction.annotations.rightEyebrowUpper
	const rightEyeLower = prediction.annotations.rightEyeLower0;
	const rightBAR = getBrow(rightEyeBrow, rightEyeLower);
	// console.log(leftBAR, rightBAR)

	// if (rightBAR > 0.49) {
	// 	console.log("left_raise")
	// } else if (rightBAR > 0.38) {
	// 	console.log("normal")
	// } else {
	// 	console.log("angry")
	// }

	if (rightBAR > 0.49 && leftBAR > 0.49) {
		// console.log("raise both")
	} else if (rightBAR > 0.48 && leftBAR < 0.48) {
		// console.log("raise right")
	} else if ( leftBAR > 0.49 && rightBAR < 0.48) {
		// console.log("raise left")
	} else if (rightBAR > 0.37 || leftBAR > 0.37) {
		// console.log("normal")
	} else {
		// console.log("angry")
	}
}
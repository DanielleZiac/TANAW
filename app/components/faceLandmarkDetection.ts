import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import '@tensorflow/tfjs-backend-webgl';

import { drawMesh } from "./utilities"

const earThreshold = 0.23;

// di pa sure
const sideEyeRightThreshold = 21;
const sideEyeLeftThreshold = 10.5;
let model;
let event;
let blinkCount = 0;
let is_leftEyeClose;
let is_rightEyeClose;
let eyePos;
var intervalId;


export async function runFacemesh(video, eye) {
	// model = await faceLandmarksDetection.load({
	// 	inputResolution: {width: 640, height:480},
	// 	scale: 0.8,
	// })

	console.log("here")

	model = await faceLandmarksDetection.load(
	  faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
	  { maxFaces: 1 }
	);

	// intervalId = setInterval(startPrediciton(model, video, eye), 10000);
	intervalId = setInterval(() => {
		startPrediciton(model, video, eye);
	}, 10000)

	// return (is_leftEyeClose, is_rightEyeClose)
}

function getEAR(upper, lower) {
	// console.log(upper, lower);

	function euclidean(x2, x1, y2, y1) {
		// console.log(x2, x1, y2, y1)
		return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
	}

	return (
		(euclidean(upper[2][0], lower[3][0], upper[2][1], lower[3][1]) 
			+ euclidean(upper[4][0], lower[3][0], upper[4][1], lower[3][1])) 
		/ (2 * (euclidean(lower[0][0], lower[8][0], lower[0][1], lower[8][1])))
	)
}


async function startPrediciton(model, video, eye) {
	// Sending video to model for prediction
	const predictions = await model.estimateFaces({
		input: video
	});

	// may nadetect na face
	console.log(predictions)
	console.log(intervalId)
	console.log(video.srcObject)

	if (eye.current != null) {
		if (predictions.length > 0) {
			predictions.forEach((prediction) => {
				eyeClosed(prediction);
				sideEye(prediction);
			}) 
			
			// eye.current.textContent = (
				// is_leftEyeClose?"left=close": "left=open") + "&" + (
				// is_rightEyeClose?"right=close": "right=open") + "&" + (
				// "eyePos=" + eyePos)
			eye.current.innerHTML = `
				?${is_leftEyeClose?"left=close": "left=open"}&${is_rightEyeClose?"right=close": "right=open"}&eyePos=${eyePos}`

			// console.log(is_leftEyeClose, is_rightEyeClose)
			// return (is_leftEyeClose, is_rightEyeClose)
		} else {
			eye.current.innerHTML = "no face detected";
		}
	} else {
		console.log("terminating loop")
		clearInterval(intervalId);
	}

	// drawMesh(predictions);

}


function eyeClosed(prediction) {
	// right eye
	const rightEyeLower = prediction.annotations.rightEyeLower0;
	const rightEyeUpper = prediction.annotations.rightEyeUpper0;

	// left eye
	const leftEyeUpper = prediction.annotations.leftEyeUpper0;
	const leftEyeLower = prediction.annotations.leftEyeLower0;

	// console.log(rightEyeLower, rightEyeUpper, leftEyeUpper, leftEyeLower)
	// eye aspect ratio
	const rightEAR = getEAR(rightEyeUpper, rightEyeLower);
	const leftEAR = getEAR(leftEyeUpper, leftEyeLower);

	// console.log(leftEAR, rightEAR)

	is_leftEyeClose = leftEAR <= earThreshold;
	is_rightEyeClose = rightEAR <= earThreshold;
}

function sideEye(prediction) {
	if (!is_leftEyeClose && !is_rightEyeClose) {
		// di pa sure
		if (prediction.annotations.rightEyeLower0[8][0] - prediction.annotations.rightEyeIris[0][0] >= sideEyeRightThreshold ||
			prediction.annotations.leftEyeIris[0][0] - prediction.annotations.leftEyeLower0[8][0] <= sideEyeLeftThreshold) {
			// console.log("Side eye right");
			eyePos = "right";
		} else if (prediction.annotations.rightEyeLower0[8][0] - prediction.annotations.rightEyeIris[0][0] <= sideEyeLeftThreshold ||
			prediction.annotations.leftEyeIris[0][0] - prediction.annotations.leftEyeLower0[8][0] >= sideEyeRightThreshold) {
			// console.log("Side eye left");
			eyePos = "left";
		} else {
			// console.log("Normal");
			eyePos = "normal";
		}
	}
}

function eyeBrow(prediction) {
	
}
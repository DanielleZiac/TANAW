import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import '@tensorflow/tfjs-backend-webgl';

import { drawMesh } from "./utilities"


// di pa sure yung mga threshold
const earThreshold = 0.23;
const sideEyeRightThreshold = 21;
const sideEyeLeftThreshold = 10.5;
let model;
let is_leftEyeClose;
let is_rightEyeClose;
let eyePos;
var intervalId;
var intervals = [];


export async function runFacemesh(video, setStatus, setLeftEye) {
	model = await faceLandmarksDetection.load(
	  faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
	  { maxFaces: 1 }
	);

	intervalId = setInterval(() => {
		startPrediciton(model, video, setStatus, setLeftEye);
	}, 100)
	intervals.push(intervalId)
}


function getEAR(upper, lower) {
	function euclidean(x2, x1, y2, y1) {
		return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
	}

	return (
		(euclidean(upper[2][0], lower[3][0], upper[2][1], lower[3][1]) 
			+ euclidean(upper[4][0], lower[3][0], upper[4][1], lower[3][1])) 
		/ (2 * (euclidean(lower[0][0], lower[8][0], lower[0][1], lower[8][1])))
	)
}


async function startPrediciton(model, video, setStatus, setLeftEye) {
	// Sending video to model for prediction
	const predictions = await model.estimateFaces({
		input: video
	});

	// may nadetect na face
	console.log(predictions)
	// intervals.push(intervalId)
	// console.log(intervalId, intervals)
	// console.log(video.srcObject.active)
	// console.log(eye.current)

	if (video.srcObject.active) {
		if (predictions.length > 0) {
			predictions.forEach((prediction) => {
				eyeClosed(prediction);
				sideEye(prediction);
			}) 

			if (is_leftEyeClose) {
				setLeftEye("eyes_closed")
			} else {
				setLeftEye("eyes_opened")
			}

			setStatus(true)
			// eye.current.innerHTML = `
			// 	?${is_leftEyeClose?"left=close": "left=open"}&${is_rightEyeClose?"right=close": "right=open"}&eyePos=${eyePos}`
		} else {
			setStatus(false)
			// eye.current.innerHTML = "no face detected";
		}
	} else {
		console.log("terminating loop")

		for (let i = 0; i < intervals.length; i++) {
			clearInterval(intervals[i])
		}
		intervals = []
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

	// eye aspect ratio
	const rightEAR = getEAR(rightEyeUpper, rightEyeLower);
	const leftEAR = getEAR(leftEyeUpper, leftEyeLower);

	is_leftEyeClose = leftEAR <= earThreshold;
	is_rightEyeClose = rightEAR <= earThreshold;
}


function sideEye(prediction) {
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


function eyeBrow(prediction) {	
}
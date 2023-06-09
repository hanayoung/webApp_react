import React, { useEffect, useState,useRef } from 'react';
import '@mediapipe/face_mesh'
import '@tensorflow/tfjs-core'
import '@tensorflow/tfjs-backend-webgl'
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection'
import ImageCropper from './ImageCropper';

const File = () => {

    const msg = {
        type:'file',
        args: ['arg1', 'arg2'], 
        data: "Hello I need Image"
      }; // 전달하기 위한 변수니까 신경 안 써도 됨

    const [img,setImg] = useState();
    const [changed,setChanged] = useState(false);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [minX, setMinX] = useState(9999);
    const [minY, setMinY] = useState(9999); // changed부터 minY까지 모두 렌더링을 위해 만든 useState..


  const selectImageFromGallery = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // reactNative로부터 받아온 이미지 파일

    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file); 
      const image = new Image();   
      reader.onloadend = () => {
        console.log(reader.result);
        image.src = reader.result;  // 34~39 줄은 모델 돌리기 위한 타입 변환 과정
        setImg(image);
        runModel(image);
      } 
      // Send a message back to React Native
      window.ReactNativeWebView.postMessage(JSON.stringify(msg));
    };
    fileInput.click(); // 카메라/파일 선택하는 dialog 띄우는 부분
  };

  const runModel = async (img) => {
    const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
    const detectorConfig = {
    runtime: 'tfjs', // or 'tfjs'
    // solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh',
    }
    const detector = await faceLandmarksDetection.createDetector(model, detectorConfig);
    const faces = await detector.estimateFaces(img); // 46 - 52 줄이 model 설정하고 돌리는 부분

    let maxX = 0;
    let maxY = 0;
    let tminX = 9999;
    let tminY = 9999;
    for(let i=0; i<faces[0].keypoints.length;i++){ // 데이터 구조가 keypoints 배열의 요소 내에 위치를 나타내는 label이 있어서 돌리는 for문
      if(faces[0].keypoints[i].name!=null&&faces[0].keypoints[i].name=="rightEye"){ // 오른쪽 눈만 우선 테스트 추후 왼쪽 눈도 추가 에정
        if(faces[0].keypoints[i].x<tminX){
          tminX=faces[0].keypoints[i].x;
        }else if(faces[0].keypoints[i].x>maxX){
          maxX=faces[0].keypoints[i].x;
        }
        if(faces[0].keypoints[i].y<tminY){
          tminY = faces[0].keypoints[i].y;
        }else if(faces[0].keypoints[i].y>maxY){
          maxY = faces[0].keypoints[i].y;
        }
      } // 눈부분만 이미지(직사각형) 생성하기 위해서 최소/최대 x, y좌표 구함
      if(i==faces[0].keypoints.length-1){
        setMinX(tminX);
        setMinY(tminY);
        setWidth(maxX-tminX);
        setHeight(maxY - tminY);
        setChanged(true);
      } // for문 끝까지 돌고 구한 값들 세팅
    }
  };

  const callFunction = () => {
    return changed&&width>0&&height>0&&minX!=9999&&minY!=9999 ? <div>
    <ImageCropper src={img} x={minX} y={minY} width={width} height={height} styles={{height:'200px', width:'200px'}}/>
    </div> :
    null
  } // 이미지 렌더링 위해 따로 분리한 리턴인데 바꾸려면 바꿔도 괜찮

  return (
    <div>
      <button onClick={selectImageFromGallery}>Select Image from Gallery</button>
      {callFunction() }
    </div>
  );
};

export default File;

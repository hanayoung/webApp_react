import './App.css';
import { useEffect, useRef, useState } from 'react';
import File from './File';


function App() {
  const webviewRef = useRef(null);

  const onClickHandler = (event) => {
    const msg= {
      type:'alert',
      args: ['arg1', 'arg2'], 
      data: "Hello I'm from React"
    };

    if(window.ReactNativeWebView){
      window.ReactNativeWebView.postMessage(JSON.stringify(msg));
    }
  }

  const receiveMessageFromWebView = (event) => {
    console.log('Message received from WebView:', event.data);
  }

  // const onNotiHandler = (event) => {
  //   const msg= {
  //     type:'noti',
  //     args: ['arg1', 'arg2'], // 함수에 전달할 인수
  //     data: "Test Notification"
  //   };
  //   if(window.ReactNativeWebView){
  //     window.ReactNativeWebView.postMessage(JSON.stringify(msg));
  //   }
  // }
  useEffect(() => {
    window.addEventListener('message',receiveMessageFromWebView);
    document.addEventListener('message',receiveMessageFromWebView); // RN으로 메세지 보내는 핸들러 설정하는 부분
    return () => {
      window.removeEventListener('message',receiveMessageFromWebView);
      document.addEventListener('message',receiveMessageFromWebView); //RN으로 메세지 보내는 핸들러 삭제하는 부분
    }
  },[]);

  return (
    <div className="App">
      <button onClick={onClickHandler}>Send Message to WebView</button>
      <File/>
      {/* <button onClick={onNotiHandler}>Set Notification</button> */}
    </div>
  );
}

export default App;

import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import FormWrapper from './FormWrapper';
import ConfirmWrapper from './ConfirmWrapper';
import Question from './Question';
import Detail from './Detail';

function App() {
  const webviewRef = useRef(null);
  const [uri,setUri] = useState("");

  const receiveMessageFromWebView = (event) => {
    console.log("event",event);
    if(event.data.type=="webpackWarnings"|| event.data.type=="webpackInvalid"||(event.data.type=="webpackOk"&&event.data.data==undefined)) {
      console.log("here")
      return ;
    }else {
      const tmp = String(event.data);
      if(tmp.includes("webpackHotUpdate")){
        console.log("herehere")
        return;
      }
      const data = JSON.parse(event.data);
      
      if(data.type=="image"){
        setUri(data.payload);
      }
      
    }
  }
  
  useEffect(() => {
    window.addEventListener('message',receiveMessageFromWebView);// RN으로 메세지 보내는 핸들러 설정하는 부분
    return () => {
      window.removeEventListener('message',receiveMessageFromWebView); //RN으로 메세지 보내는 핸들러 삭제하는 부분
    }
  },[]);

  return (
    <div className="App" style={{flex:1}}>
      <Routes>    
          {/* <Route path='/' element={}/> */}
          <Route path='/form' element={<FormWrapper/>}/> 
          <Route path='/confirm' element={<ConfirmWrapper/>}/>
          <Route path='/question' element={<Question/>}/>
          <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;


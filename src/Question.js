import { useEffect, useState } from "react";
const Question = () => {
    const [img,setImg] = useState();
    const [isMobile,setIsMobile] = useState(false);
    const isCheckMobile = () => {
        var check = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        setIsMobile(check);
    }

    const selectImageFromGallery = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*'; 
    
        fileInput.onchange = (e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(file); 
          const image = new Image();   
          reader.onloadend = () => {
            console.log(reader.result);
            image.src = reader.result;  
            setImg(image);
          } 
        };
        console.log("src",img);
        fileInput.click(); // 카메라/파일 선택하는 dialog 띄우는 부분
      };

    const callWebView = (event) => {
        if(isMobile){
            let msg;
            if(event.target.value=="camera"){
                msg= {
                    type:'camera',
                    data: "call camera"
                  };
            }else if(event.target.value=="gallery"){
                msg= {
                    type:'gallery',
                    data: "call gallery"
                  };
            }else{
                console.log("err in question");
            }
            if(msg&&window.ReactNativeWebView){
                window.ReactNativeWebView.postMessage(JSON.stringify(msg));
              }
        }else{
            selectImageFromGallery();
        }

    }

    useEffect(() => {
        isCheckMobile();
    },[])
    return(
        <div className='border m-8 p-8 border-gray-300'>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className='flex gap-x-3 justify-center'>
                {isMobile&&<button type="submit" value="camera" onClick={callWebView} className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">사진 촬영</button>}
                <button type="submit" value="gallery" onClick={callWebView} className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">갤러리 이미지 선택</button>
            </div>
            </div>
        </div>
    )
}

export default Question;
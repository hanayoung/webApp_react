import axios from "axios";
import { useEffect, useState } from "react";

const Detail = () => {
    const [img,setImg] = useState('');

    const getImg = async () => {
        await axios.get("http://localhost:8082/api/common/image/download",
          {responseType:'arraybuffer'}
        )
        .then((res) => {
            console.log("res",res.data)
            const blob = new Blob([res.data],{type:'image/jpeg'});
            const url = URL.createObjectURL(blob);
            console.log("url",url);
            setImg(url);
        })
        .catch(err => console.log("err",err))
    }
    useEffect(()=> {
        getImg();
    },[])
    return(
        <div className='border m-8 p-8 border-gray-300'>
        {/* <div className="grid gap-6 mb-6 md:grid-cols-2"> */}
        <div>{'<'}사진{'>'}</div>
        <div className="flex  gap-x-3 justify-center">
        {img ? (
            <img src={img} alt="Server Image"/>
        ) : (
            <p>Loading ...</p>
        )
        }
        </div>
        {/* </div> */}
        </div>
    )
}

export default Detail;
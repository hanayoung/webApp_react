import { useEffect, useState } from "react";
import Confirm from "./Confirm";
import axios from "axios";

const ConfirmWrapper = () => {
    const [data,setData] = useState();
    const onFetchData = async() => {
        await axios.get("http://localhost:8082/api/common/reserve/confirm",{
          headers:{
            "Content-Type":'application/json'
         }}
        )
        .then((res) => {
            setData(res.data);
            console.log("res",res.data);
        })
        .catch(err => console.log("err",err))
      }
    useEffect(() => {
        onFetchData();
    },[])
    return(
        <>
        {console.log("data",data)}
        {data&&<Confirm data={data}/>}
        </>
    )
}

export default ConfirmWrapper;
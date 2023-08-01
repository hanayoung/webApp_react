import FormComponent from "./Form"
import axios from "axios";

const FormWrapper = () => {

    const onSubmitData = async (submitData) => {
        const data = {
          ...submitData,
        };
        console.log("app",data);
        await axios.post("http://localhost:8082/api/common/reserve/register",JSON.stringify(data),{
          headers:{
            "Content-Type":'application/json'
         }
        }
        )
        .then(res => console.log(res.data))
        .catch(err => console.log("err",err))
      }

    return(
     <FormComponent onSubmitData={onSubmitData}/>
    )
}
export default FormWrapper;
import axios from "axios";

const Confirm = ({data}) => {
    const item = data[0];

    const approve = async () => {
        const data = {
            state:"approve",
            targetToken:"dgBy1QqUQBG9Kj6jzekjqn:APA91bEGJDG7F97PUUk9F7B5n5XIGdgNxChYfoS3_opBKKh0ZlxDDRYEXQlT_oWcyJiqhWxis3WLJx7tXtg6z_2EqFCwIwnnvuiKsBJkvwstDZLZVKbfGxjN5050H5syipZimzZuL3Cl"
        }
        await axios.post("http://localhost:8082/api/common/test", JSON.stringify(data),{
            headers:{
               "Content-Type":'application/json'
            }
        })
        .then(res => console.log("res",res))
        .catch(err => console.log("err",err))
    }
    const reject = async () => {
        const data = {
            state:"reject",
            targetToken:"dgBy1QqUQBG9Kj6jzekjqn:APA91bEGJDG7F97PUUk9F7B5n5XIGdgNxChYfoS3_opBKKh0ZlxDDRYEXQlT_oWcyJiqhWxis3WLJx7tXtg6z_2EqFCwIwnnvuiKsBJkvwstDZLZVKbfGxjN5050H5syipZimzZuL3Cl"
        }
        await axios.post("http://localhost:8082/api/common/test", JSON.stringify(data),{
            headers:{
                "Content-Type":'application/json'
             }
    })
        .then(res => console.log("res",res))
        .catch(err => console.log("err",err))
    }

    return(
        <div className='border m-8 p-8 border-gray-300'>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{item.name}</p>
        <div>
        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sex</label>
            <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >{item.sex}</p>
        </div> 
        <div>
        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
            <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{item.age}</p>
        </div>  
        <div>
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Region</label>
            <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >{item.region}</p>
        </div>
        <div>
        <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selected specialist</label>
            <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{item.specialist}</p>
        </div>
        <div>
        <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reservation</label>
            <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{item.reservation}</p>
        </div>
        <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Symptoms</label>
            <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{item.symptoms}</p>
        </div>
        </div>
        <div className='flex gap-x-3 justify-center'>
                <button type="submit" onClick={approve} className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Approve</button>
                <button type="submit" onClick={reject} className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reject</button>
            </div>

        </div>
    )
}

    

export default Confirm;
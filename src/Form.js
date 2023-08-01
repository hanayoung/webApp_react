import React, { useState } from 'react'

const FormComponent = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [region, setRegion] = useState('');
    const [sex, setSex] = useState('');
    const [reservation, setReservation] = useState('');
    const [specialist, setSpecialist] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            name:name,
            age:age,
            region:region,
            sex:sex,
            reservation:reservation,
            specialist:specialist,
            symptoms:symptoms
        };
        setName('');
        setAge('');
        setRegion('');
        setSex('');
        setReservation('');
        setSpecialist('');
        setSymptoms('');
        props.onSubmitData(data);
    }
    return(
        <div className='border m-8 p-8 border-gray-300'>
        <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required />
                </div>
                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sex</label>
                    <select id="countries" value={sex} onChange={(e)=>setSex(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a sex</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                    <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>  
                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Region</label>
                    <select id="countries" value={region} onChange={(e)=>setRegion(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="KR">Korea</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selected specialist</label>
                    <input type="text" value={specialist} onChange={(e)=>setSpecialist(e.target.value)} id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select specialist" required />
                </div>
                <div>
                    <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reservation</label>
                    <input type="datetime-local" value={reservation} onChange={(e)=>setReservation(e.target.value)} id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>

            <div className="">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Symptoms</label>
                <textarea id="message" value={symptoms} onChange={(e)=>setSymptoms(e.target.value)} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your symptoms here..."></textarea>
            </div> 
            </div>
            <div className='flex gap-x-3 justify-end'>
                {/* <button type="submit" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button> */}
                <button type="submit" onClick={submitHandler} className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
          
        </form>
    </div>
    )
    }

export default FormComponent
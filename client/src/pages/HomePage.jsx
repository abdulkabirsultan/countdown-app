import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Logo from '../assets/applogo.png'
import ClockBg from '../assets/clockbg.webp'

const baseURL = 'https://lets-countdown-production.up.railway.app/api/v1/countdown/'

const HomePage = () => {
    const [form, setForm] = useState({
      title: "",
      date: "",
      time: ""
    })
   const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
     const submitHandler = async(e) => {
        e.preventDefault();
        if (form.title === "" && form.date === "" && form.time === "") {
            alert("input fields cannot be empty");
            return false;
        } else {
          const hash = localStorage.getItem('hash')
         await axios.post(baseURL + hash, { ...form })
            .then((response) => {
              console.log(response.data);
            });
            alert("success");
        }
    };

  return (
    <div className=''>
      <div>
        <img src={Logo} alt='logo' />
      </div>

      <div className='flex items-center min-h-screen md:space-x-5 space-y-2 justify-center md:flex-row flex-col'>
       <div className='md:w-[410px] w-[250px] h-[20rem]'>
         <img src={ClockBg} alt='bg' className='md:w-[401px] w-[26rem] md:h-[15rem] h-[10rem] block mx-auto' />
         <h2 className='md:text-[2rem] text-[1.2rem] font-bold md:leading-[39px] leading-8'>Create countdowns for your events fast, easy and quick</h2>
       </div>
       <div className='flex flex-col justify-center rounded-[8px] h-[21rem] p-5 bg-[#D2D4D3] shadow-md h-[300px]'>
        <form onSubmit={submitHandler} className='flex flex-col space-y-5 md:w-[400px] w-[15rem]'>
          <input
             type='text'
             onChange={handleChange}
             placeholder='Event name'
             name='title' 
             className='border-2 border-[rgba(0, 0, 0, 0.5)] rounded-[7px] outline-none p-2 w-full'/>
          <input 
             type='date'
             onChange={handleChange}  
             name='date'
             className='border-2 border-[rgba(0, 0, 0, 0.5)] rounded-[7px] outline-none p-2 w-full'/>
          <input 
             type='time'
             onChange={handleChange} 
             name='time'
             className='border-2 border-[rgba(0, 0, 0, 0.5)] rounded-[7px] outline-none p-2 w-full'/>
          <button type='submit' className='bg-[#4AC985] text-white  p-2 w-full rounded-[7px] outline-none'>Create countdown</button>
        </form>
       </div>
      </div>
    </div>
  )
}

export default HomePage
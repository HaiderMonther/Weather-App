import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
function Home() {
    const [data, setData]= useState({
        celcius: 10,
        name: 'london',
        humidity:10,
        speed: 2
    })
    useEffect(()=> {
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=9d289b19140f912cbf20602b8c243930&units=metric'; 
        axios.get(apiUrl)
        .then(res => console.log(res.data))
        .catch(err =>console.log(err));
    }, [])
  return (
    <div className='container'>
        <div className='weather'>
            <div className='search'>
                <input type='text' placeholder='Enter City Name'/>
                <button><img src='/images/loupe.png' alt=''/></button>
            </div>

            <div className='winfo'>
                <img src='/images/cloudy.png' className='icon'/>
                <h1>22°C</h1>
                <h2>london</h2>
                <div className='details'>
                    <div className='col'>
                     <img src='/images/humidity.png' alt=''/>
                        <div className='Humidity'>
                            <p>20%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className='col'>
                        <img src='/images/wind.png' alt=''/>
                            <div className='Wind'>
                                <p>2 km/h</p>
                                <p>Wind</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;
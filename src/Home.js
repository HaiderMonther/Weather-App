import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
function Home() {
    const [data, setData]= useState({
        celcius: 10,
        name: 'london',
        humidity:10,
        speed: 2,
        image: ''
    })
    const [name, setName] = useState('');

    const handleClick = ()=>{
        if(name !== "") {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=9d289b19140f912cbf20602b8c243930&units=metric`; 
            axios.get(apiUrl)
            .then(res => {
                let imagePath = '';
                
                setData({...data, celcius: res.data.main.temp, name: res.data.name,
                     humidity: res.data.main.humidity, speed: res.data.wind.speed })
            })
            .catch(err =>console.log(err));
        }
    }
  return (
    <div className='container'>
        <div className='weather'>
            <div className='search'>
                <input type='text' placeholder='Enter City Name' onChange={e => setName(e.target.value)}/>
                <button><img src='/images/loupe.png' alt='' onClick={handleClick}/></button>
            </div>

            <div className='winfo'>
                <img src='/images/cloudy.png' className='icon'/>
                <h1>{Math.round(data.celcius)}°C</h1>
                <h2>{data.name}</h2>
                <div className='details'>
                    <div className='col'>
                     <img src='/images/humidity.png' alt=''/>
                        <div className='Humidity'>
                            <p>{Math.round(data.humidity)}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className='col'>
                        <img src='/images/wind.png' alt=''/>
                            <div className='Wind'>
                                <p>{Math.round(data.speed)} km/h</p>
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
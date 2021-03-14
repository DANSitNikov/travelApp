import React, { useEffect, useState } from 'react'
import './WeatherWidget.scss'


interface weatherProps {
    city: string,
    language: string
}

const WeatherWidget: React.FC<weatherProps> = (props) => {
    const [weatherIcon, setWeatherIcon] = useState('')
    const [temperature, setTemperature] = useState('')
    const [weatherDescription, setWeatherDescription] = useState('')

    useEffect(() => {
        async function getWeather() {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&lang=${props.language}&appid=55aa85f147056ca0778f19550850090c&units=metric`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.weather);
            setWeatherIcon(`${data.weather[0].icon}`)
            setTemperature(`${data.main.temp}`)
            setWeatherDescription(`${data.weather[0].description}`)
        }
        getWeather()
    }, [props.city])

    return (
        <div className='weather_widget'>
            <div className='weather_icon'><img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt={weatherDescription} /></div>
            <div className='weather_temperature'>{temperature}°С</div>
            <div className='weather_description'>{weatherDescription}</div>
        </div>
    )
}

export default WeatherWidget
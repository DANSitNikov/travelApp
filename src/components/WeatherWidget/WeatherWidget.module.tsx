import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import style from './WeatherWidget.module.scss'
import { RootState } from '../../types'


interface weatherProps {
    city: string,
}

const WeatherWidget: React.FC<weatherProps> = (props) => {
    const [weatherIcon, setWeatherIcon] = useState('')
    const [temperature, setTemperature] = useState('')
    const [weatherDescription, setWeatherDescription] = useState('')

    const lang = useSelector((state: RootState) => {
        return state.app.lang
    })

    useEffect(() => {
        async function getWeather() {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&lang=${lang}&appid=55aa85f147056ca0778f19550850090c&units=metric`;
            try {
                const res = await fetch(url);
                const data = await res.json();
                setWeatherIcon(`${data.weather[0].icon}`)
                setTemperature(`${data.main.temp}`)
                setWeatherDescription(`${data.weather[0].description}`)
            } catch (e) {
                console.error(e)
            }

        }
        getWeather()
    }, [props.city, lang])

    return (
        <div className={style.weather_widget}>
            <div className={style.weather_icon}><img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt={weatherDescription} /></div>
            <div className={style.weather_info}>
                <div className={style.weather_temperature}>{temperature}°С</div>
                <div className={style.weather_description}>{weatherDescription}</div>
            </div>
        </div>
    )
}

export default WeatherWidget
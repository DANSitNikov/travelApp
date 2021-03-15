import './TimeWidget.scss'
import React, { useEffect, useState } from 'react'

interface Props {
    offset: number,
    language: string
}

interface capitalTime {
    hours: number | string
    minutes: number | string
    seconds: number | string
    day: number | string
    month: number
    dayOfTheWeek: number
}

interface monthDayNames {
    monthNames: [string, string, string, string, string, string, string, string, string, string, string, string],
    dayNames: [string, string, string, string, string, string, string]
}

const TimeWidget: React.FC<Props> = (props) => {

    const [monthDayNames, setMonthDayNames] = useState<monthDayNames>()
    const [capitalTime, setCapitalTime] = useState<capitalTime>({
        hours: 0,
        minutes: 0,
        seconds: 0,
        day: 0,
        month: 0,
        dayOfTheWeek: 0,
    })

    useEffect(() => {
        let timer = setInterval(() => {

            const date = new Date()
            const currentTimeZoneOffsetMS = date.getTimezoneOffset() * 60 * 1000

            let correctDate = new Date(date.getTime() + currentTimeZoneOffsetMS + (3600000 * props.offset))
            let hours: number | string = correctDate.getHours()
            let minutes: number | string = correctDate.getMinutes()
            let seconds: number | string = correctDate.getSeconds()
            let day: number | string = correctDate.getDate()
            let dayOfTheWeek: number = correctDate.getDay()
            let month: number = correctDate.getMonth()

            if (hours < 10) {
                hours = '0' + hours
            }
            if (minutes < 10) {
                minutes = '0' + minutes
            }
            if (seconds < 10) {
                seconds = '0' + seconds
            }
            if (day < 10) {
                day = '0' + day
            }

            setCapitalTime({
                hours,
                minutes,
                seconds,
                day,
                month,
                dayOfTheWeek
            })
        }, 500)
        switch (props.language) {
            case 'RU':
                console.log('1')
                setMonthDayNames({
                    monthNames: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октяря', 'ноября', 'декабря'],
                    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
                }
                )

                break
            case 'EN':
                setMonthDayNames(
                    {
                        monthNames: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
                        dayNames: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
                    }
                )

                break
            case 'ES':
                setMonthDayNames(
                    {
                        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
                        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
                    }
                )
                break
        }
        return (
            () => clearInterval(timer)
        )
    }, [])


    return (
        <div className='time_widget_body'>
            <div className='time'>
                {`${capitalTime.hours}:${capitalTime.minutes}:${capitalTime.seconds}`}
            </div>
            <div>
                {`${capitalTime.day} ${monthDayNames?.monthNames[capitalTime.month]}, ${monthDayNames?.dayNames[capitalTime.dayOfTheWeek]}`}
            </div>
        </div>
    )
}

export default TimeWidget
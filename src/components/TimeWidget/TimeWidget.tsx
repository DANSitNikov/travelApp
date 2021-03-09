import './TimeWidget.scss'
import React, { useEffect, useState } from 'react'

interface Props {
    offset: number
}

interface capitalTime {
    hours: number | string
    minutes: number | string
    seconds: number | string
    day: number | string
    month: number | string
    year: number | string
}

const TimeWidget: React.FC<Props> = (props) => {
    const [capitalTime, setCapitalTime] = useState<capitalTime>({
        hours: 0,
        minutes: 0,
        seconds: 0,
        day: 0,
        month: 0,
        year: 0,
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
            let month: number | string = correctDate.getMonth() + 1
            let year: number | string = correctDate.getFullYear()

            if (hours < 10) {
                hours = '0' + hours
            }
            if (minutes < 10) {
                minutes = '0' + hours
            }
            if (seconds < 10) {
                seconds = '0' + seconds
            }
            if (day < 10) {
                day = '0' + day
            }
            if (month < 9) {
                month = '0' + month
            }

            setCapitalTime({
                hours,
                minutes,
                seconds,
                day,
                month,
                year,
            })
        }, 500)
        return (
            () => clearInterval(timer)
        )
    }, [])


    return (
        <div className='time_widget_body'>
            <h2>Time and date in the capital of country</h2>
            {`${capitalTime.hours}:${capitalTime.minutes}:${capitalTime.seconds}`}
            <br />
            {`${capitalTime.day}.${capitalTime.month}.${capitalTime.year}`}
        </div>
    )
}

export default TimeWidget
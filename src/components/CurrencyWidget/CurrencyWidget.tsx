import React, { useEffect, useState } from 'react'

import './CurrencyWidget.scss'

interface Props {
    currency: string
}

interface Info {
    'USD': number,
    'EUR': number,
    'RUB': number
}

const CurrencyWidget: React.FC<Props> = (props) => {
    const [currencyInfo, setcurrencyInfo] = useState<Info>()

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://api.exchangeratesapi.io/latest?base=${props.currency}`)
                .then((data) => data.json())
                .then((data) => {
                    const infoForState = {
                        'USD': data.rates.USD
                            ? data.rates.USD.toFixed(3)
                            : 1,
                        'EUR': data.rates.EUR
                            ? data.rates.EUR.toFixed(3)
                            : 1,
                        'RUB': data.rates.RUB
                            ? data.rates.RUB.toFixed(3)
                            : 1,
                    }
                    setcurrencyInfo(infoForState)
                })


            // console.log(data.json())
        }
        fetchData()
    }, [props.currency])

    return (
        <div className='currency_widget'>
            <table>
                <tr>
                    <td>Currency</td>
                    <td>USD</td>
                    <td>EUR</td>
                    <td>RUB</td>
                </tr>
                <tr>
                    <td>{props.currency}</td>
                    <td>{currencyInfo?.USD}</td>
                    <td>{currencyInfo?.EUR}</td>
                    <td>{currencyInfo?.RUB}</td>
                </tr>
            </table>
        </div>
    )
}

export default CurrencyWidget

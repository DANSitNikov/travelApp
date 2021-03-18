import React, { useEffect, useState } from 'react'

import style from './CurrencyWidget.module.scss'

interface Props {
    currency: string,
    currencyTranslate: string,
}

interface Info {
    'USD': number,
    'EUR': number,
    'RUB': number
}

const CurrencyWidget: React.FC<Props> = (props) => {
    const [currencyInfo, setCurrencyInfo] = useState<Info>();

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://api.exchangeratesapi.io/latest?base=${props.currency}`)
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
                    setCurrencyInfo(infoForState)
                })
        }
        fetchData()
    }, [props.currency])

    return (
        <div className={style.currency_widget}>
            <table>
                <tbody>
                    <tr>
                        <td>{props.currencyTranslate}</td>
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
                </tbody>
            </table>
        </div>
    )
}

export default CurrencyWidget

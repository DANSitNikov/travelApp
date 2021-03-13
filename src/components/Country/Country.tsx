import './Country.scss'
import {
    useParams
} from 'react-router-dom'
import TimeWidget from '../TimeWidget'

interface Props {
    code: string
}

function Country() {
    const { code }: Props = useParams();

    return (
        <div className='countryPage'>Test country with code: {code}
            <TimeWidget offset={+9} language={'ES'} />
        </div>
    )
}

export default Country;

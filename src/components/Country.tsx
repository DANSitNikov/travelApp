import {
    useParams
} from 'react-router-dom'

interface Props {
    code: string
}

function Country() {
    const { code }: Props = useParams();

    return(
        <div className='countryPage'>Test country with code: {code}</div>
    )
}

export default Country;

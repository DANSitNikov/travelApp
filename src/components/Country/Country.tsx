import './Country.scss';
import { useParams } from 'react-router-dom';
import CountryMap from '../CountryMap'
import countryGeo from '../CountryMap/DEU.geo.json'

interface Props {
  code: string;
}

function Country() {
  const { code }: Props = useParams();

  return (
    <div className='countryPage'>Test country with code: {code}
      <CountryMap capitalGeo={[52.50, 13.38]} capitalName='Berlin' countryGeo={countryGeo} />
    </div>

    // в этом компоненте нужно делать новый асихронный запрос через редакс по коду
  );
}

export default Country;

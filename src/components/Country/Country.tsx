import './Country.scss';
import { useParams } from 'react-router-dom';

interface Props {
  code: string;
}

function Country() {
  const { code }: Props = useParams();

  return (
    <div className='countryPage'>Test country with code: {code}</div>
    // в этом компоненте нужно делать новый асихронный запрос через редакс по коду
  );
}

export default Country;

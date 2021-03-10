import './Country.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface Props {
  code: string;
}

function Country() {
  const { code }: Props = useParams();
  const [countryName, setCountryName] = useState('');
  const countriesArray = useSelector((state: any) => {
    return state.countries.countriesArray;
  });

  useEffect(() => {
    const currentCoutry = countriesArray.filter((el: any) => {
      return el.alpha3Code === code;
    });
    if (!currentCoutry.length) {
      return;
    }
    setCountryName(currentCoutry[0].name);
  }, [countriesArray, code]);

  return (
    <div className='countryPage'>
      Test country with code: {code}
      <p>{countryName}</p>
    </div>
  );
}

export default Country;

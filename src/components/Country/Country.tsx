import React from 'react';
import './Country.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CountryTypes, RootState } from '../../types';

function Country() {
  const { code } = useParams<{ code: string }>();

  const [countryName, setCountryName] = useState<string>('');

  const countriesArray = useSelector((state: RootState) => {
    return state.countries;
  });

  useEffect(() => {
    const currentCoutry:
      | CountryTypes
      | undefined = countriesArray.find((el: CountryTypes) => {
      return el.alpha3Code === code;
    });
    if (currentCoutry) {
      setCountryName(currentCoutry.name);
    }
  }, [countriesArray, code]);

  return (
    <div className='countryPage'>
      Test country with code: {code}
      <p>{countryName}</p>
    </div>
  );
}

export default Country;

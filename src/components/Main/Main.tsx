import React from 'react';
import { useSelector } from 'react-redux';
import './Main.scss';

import CountryCard from '../CountryCard';
import { CountryTypes, RootState } from '../../types';

const Main: React.FC = () => {
  const countriesArray = useSelector((state: RootState) => {
    return state.countries;
  });

  return (
    <div className='Main'>
      {countriesArray.map((el: CountryTypes, i: number) => {
        return (
          <CountryCard
            countryName={el.name}
            countyImage={el.mainImage}
            countyDescr={el.shortDescription}
            countryCode={el.alpha3Code}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Main;

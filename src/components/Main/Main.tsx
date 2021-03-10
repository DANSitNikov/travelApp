import React from 'react';
import { useSelector } from 'react-redux';
import './Main.scss';

import CountryCard from '../CountryCard';

const Main: React.FC = () => {
  const countriesArray = useSelector((state: any) => {
    return state.countries.countriesArray;
  });

  return (
    <div className='Main'>
      {countriesArray.map((el: any, i: number) => {
        console.log(el);

        return (
          <CountryCard
            countryName={el.name}
            countyImage={el.mainImage}
            countyDescr={el.shortDescription}
            countyId={el._id}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Main;

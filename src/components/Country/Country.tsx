import React from 'react';
import './Country.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CountryTypes, RootState } from '../../types';
import ReactPlayer from "react-player";

function Country() {
  const { code } = useParams<{ code: string }>();

  const [countryName, setCountryName] = useState<string>('');

  const countriesArray = useSelector((state: RootState) => {
    return state.countries;
  });

  const [content, setContent] = useState(1);

  useEffect(() => {
    const currentCountry:
      | CountryTypes
      | undefined = countriesArray.find((el: CountryTypes) => {
      return el.alpha3Code === code;
    });
    if (currentCountry) {
      setCountryName(currentCountry.name);
    }
  }, [countriesArray, code]);

  return (
    <div className='countryPage'>
      <div className='countryBody'>
          <div className='contentSelector'>
              <button onClick={() => {setContent(1)}}>1</button>
              <button onClick={() => {setContent(2)}}>2</button>
              <button onClick={() => {setContent(3)}}>3</button>
              <button onClick={() => {setContent(4)}}>4</button>
          </div>
          <div className='countryContent'>
              <div className='countryName'>
                  This is {countryName}.
              </div>
              <ReactPlayer
                  url="https://www.youtube.com/watch?v=05TfxysYZOo"
                  controls={true}
                  volume={0.5}
              />
          </div>
      </div>
    </div>
  );
}

export default Country;

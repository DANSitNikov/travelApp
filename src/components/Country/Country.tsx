import React from 'react';
import './Country.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CountryTypes, RootState } from '../../types';
import ReactPlayer from "react-player";
import InfoIcon from '@material-ui/icons/Info';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from './Loader'
import CountryMap from '../CountryMap'
import TimeWidget from '../TimeWidget'
import WeatherWidet from '../WeatherWidget'
import CurrencyWidget from '../CurrencyWidget'

type ContentProps = {
  type: number,
  country: CountryTypes | undefined,
  capitalTranslate: string,
  regionTranslate: string,
  populationTranslate: string,
}

const CountryContent = ({ type, country, capitalTranslate, regionTranslate, populationTranslate }: ContentProps) => {
    switch (type) {
        case 1: {
            return (
                <div>
                    <div className='countryInfoBlock'>
                        <img
                            src={country?.mainImage}
                            alt={country?.alpha3Code + ' photo'}
                            className='countryPhoto'
                        />
                        <div className='infoBlock'>
                            <div className='countryInfo'>
                                <p>{capitalTranslate}: {country?.capital}</p>
                                <p>{populationTranslate}: {country?.population}</p>
                                <p>{regionTranslate}: {country?.region}</p>
                            </div>
                            <div className='mapAndDesc'>
                                <div className='shortDesc'>
                                    {country?.shortDescription}
                                </div>
                            </div>
                        </div>
                        <CountryMap capitalGeo={country?.capitalMarker} capitalName={country?.capital} countryGeo={country?.geo} />
                    </div>
                </div>
            )
        }
        case 2: {
            return (
                <div className='youtube'>
                    <ReactPlayer
                        url={country?.mainVideo}
                        controls={true}
                        volume={0.5}
                        light={true}
                        width={'50vw'}
                        height={'28.12vw'}
                    />
                </div>
            )
        }
        case 3: {
            const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            };
            return (
                <div>
                    <div className='slider'>
                        <Slider {...settings}>
                            {country?.attractions.map((elem, index) => {
                                return (
                                    <div className='attractionBlock'>
                                        <div>
                                            <p style={{ marginBottom: '25px' }}>{elem.title}</p>
                                            <img src={elem.image} alt={elem.title + ' photo'}
                                                style={{ margin: '0 auto', width: '46vw' }}
                                            />
                                            <br />
                                            <p>{elem.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            )
        }
        default: {
            return (
                <h1>Sorry, something went wrong</h1>
            )
        }
    }
}

const Country: React.FC<any> = (props) => {
  const { code } = useParams<{ code: string }>();
  const { changeVisibilityToFalse, language } = props;

  const [countryInfo, setCountryInfo] = useState<CountryTypes>();

  const countriesArray = useSelector((state: RootState) => {
        return state.countries;
    });

    const [content, setContent] = useState(1);

  useEffect(() => {
    changeVisibilityToFalse();
    const currentCountry:
      | CountryTypes
      | undefined = countriesArray.find((el: CountryTypes) => {
      return el.alpha3Code === code;
    });
    if (currentCountry) {
      setCountryInfo(currentCountry);
    }
      console.log(currentCountry);
  }, [countriesArray, code]);

    return (
        <div className='countryPage'>
            <div className='countryBody'>
                <div className='contentSelector'>
                    <button onClick={() => { setContent(1) }}><InfoIcon /></button>
                    <button onClick={() => { setContent(2) }}><PlayCircleOutlineIcon /></button>
                    <button onClick={() => { setContent(3) }}><PhotoSizeSelectActualIcon /></button>
                </div>
                {!countryInfo ?
                    <Loader /> :
                    <div className='countryContent'>
                        <div className='widgets'>
                            <TimeWidget offset={countryInfo.timezone} />
                            <CurrencyWidget currency={countryInfo.currency} currencyTranslate={language.currency}/>
                            <WeatherWidet city={countryInfo.capital} />
                        </div>
                        <h2 className='countryName'>
                            {countryInfo && countryInfo.name.length <= 8 ? countryInfo.name : countryInfo?.alpha3Code}
                        </h2>
                        <div className='countryFlex'>
                            <CountryContent
                              type={content}
                              country={countryInfo}
                              capitalTranslate={language.capital}
                              regionTranslate={language.region}
                              populationTranslate={language.population}
                            />
                        </div>
                    </div>}
            </div>
        </div>
    );
}

export default Country;

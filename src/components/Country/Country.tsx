import React from 'react';
import style from './Country.module.scss';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {CountryTypes, RootState} from '../../types';
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
import {Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";

type ContentProps = {
  type: number,
  country: CountryTypes | undefined,
  capitalTranslate: string,
  regionTranslate: string,
  populationTranslate: string,
}

const CountryContent = ({type, country, capitalTranslate, regionTranslate, populationTranslate}: ContentProps) => {
  switch (type) {
    case 1: {
      return (
        <div>
          <div className={style.countryInfoBlock}>
            <img
              src={country?.mainImage}
              alt={country?.alpha3Code + ' photo'}
              className='countryPhoto'
            />
            <div className={style.infoBlock}>
              <div className={style.countryInfo}>
                <p>{capitalTranslate}: {country?.capital}</p>
                <p>{populationTranslate}: {country?.population}</p>
                <p>{regionTranslate}: {country?.region}</p>
                <p>{country?.shortDescription}</p>
              </div>
            </div>
            <CountryMap capitalGeo={country?.capitalMarker} capitalName={country?.capital} countryGeo={country?.geo}/>
          </div>
        </div>
      )
    }
    case 2: {
      return (
        <div className={style.youtube}>
          <ReactPlayer
            url={country?.mainVideo}
            controls={true}
            volume={0.5}
            light={true}
            width={'60vw'}
            height={'35.12vw'}
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
        <div className={style.sliderWrapper}>
          <div className={style.slider}>
            <Slider {...settings}>
              {country?.attractions.map((elem) => {
                return (
                  <div className={style.attractionBlock}>
                    <div>
                      <p style={{marginBottom: '25px'}}>{elem.title}</p>
                      <img src={elem.image} alt={elem.title + ' photo'}
                           style={{margin: '0 auto', width: '46vw'}}
                      />
                      <br/>
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
  const {code} = useParams<{ code: string }>();
  const {changeVisibilityToFalse, language} = props;

  const [countryInfo, setCountryInfo] = useState<CountryTypes>();

  const countriesArray = useSelector((state: RootState) => {
    return state.countries;
  });

  const [content, setContent] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    changeVisibilityToFalse();
    const currentCountry:
      | CountryTypes
      | undefined = countriesArray.find((el: CountryTypes) => {
      return el.alpha3Code === code;
    });
    if (currentCountry) {
      setCountryInfo(currentCountry);
    }
  }, [countriesArray, code]);

  return (
    <div className={style.countryPage}>
      <div className={style.countryBody}>
        <div className={style.contentSelector}>
            <Button size="small" variant="contained" color="primary" onClick={() => { setContent(1) }}><InfoIcon /></Button>
            <Button size="small" variant="contained" color="primary" onClick={() => { setContent(2) }}><PlayCircleOutlineIcon /></Button>
            <Button size="small" variant="contained" color="primary" onClick={() => { setContent(3) }}><PhotoSizeSelectActualIcon /></Button>
        </div>
        {!countryInfo ?
          <Loader /> :
          <Grid className={style.countryContent}>
            <Grid container item xs={12} className={style.countryContentBase}>
              <Grid item sm={4} xs={12}>
                <h2 className={style.countryName}>
                  {countryInfo && countryInfo.name.length < 7 ? countryInfo.name : countryInfo?.alpha3Code}
                </h2>
              </Grid>
              <Grid container item sm={7} xs={12} className={style.widgets}>
                <Grid item xs={12}>
                  <CurrencyWidget currency={countryInfo.currency} currencyTranslate={language.currency}/>
                </Grid>
                <Grid item xs={6}>
                  <TimeWidget offset={countryInfo.timezone}/>
                </Grid>
                <Grid item xs={6}>
                  <WeatherWidet city={countryInfo.capital}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} item className={style.countryFlex}>
              <CountryContent
                type={content}
                country={countryInfo}
                capitalTranslate={language.capital}
                regionTranslate={language.region}
                populationTranslate={language.population}
              />
            </Grid>
          </Grid>
        }
      </div>
    </div>
  );
};

export default Country;

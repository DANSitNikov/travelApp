import React from "react"
import './Loader.scss'

const Loader: React.FC<any> = () => {
  let loading: string;
  let currentLang: string = 'EN';

  if (localStorage && localStorage.getItem('language')) {
    const setLang = localStorage.getItem('language');

    if (setLang !== null) {
      currentLang = JSON.parse(setLang);
    }

    if (currentLang === "RU") {
      loading = 'Загрузка';
    } else if (currentLang === "ES") {
      loading = 'Сarga';
    } else {
      loading = 'Loading';
    }
  } else {
    loading = 'Loading';
  }

  return (
    <div className='loadingBlock'>
      <h2 className='loadingText'>
        {loading}
      </h2>
      <div className="spinner">
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
      </div>
    </div>
  );
}

export default Loader;

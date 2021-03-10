import React, {useRef} from "react";
import style from './searchCountry.module.scss';

const SearchCountry = () => {
  const inputValue = useRef<HTMLInputElement>(null);

  const cleanContent = () => {
    if (inputValue && inputValue.current) {
      inputValue.current.value = '';
    }
  };

  return (
    <div className={style.searchCountry}>
      <div className={style.inputValue}>
        <input ref={inputValue} type="text" autoFocus={true} placeholder="something here" />
        <span onClick={cleanContent} className={style.deleteValue}>X</span>
      </div>
      <button className={style.acceptValue}>Search country</button>
    </div>
  );
};

export default SearchCountry;

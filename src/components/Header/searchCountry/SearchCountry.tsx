import React, {useEffect, useRef} from "react";
import style from './searchCountry.module.scss';

const SearchCountry = () => {
  const inputValue = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const keyboardHandler = (e: KeyboardEvent) => {
      const { key } = e;
      if (key === 'Enter') {
        if (inputValue && inputValue.current) {
          console.log(inputValue.current.value);
        }
      }
    };

    document.addEventListener('keydown', keyboardHandler);

    return () => {
      document.removeEventListener('keydown', keyboardHandler);
    };
  });

  const cleanContent = () => {
    if (inputValue && inputValue.current) {
      inputValue.current.value = '';
    }
  };

  const searchCountry = () => {
    if (inputValue && inputValue.current) {
      console.log(inputValue.current.value);
    }
  };

  return (
    <div className={style.searchCountry}>
      <div className={style.inputValue}>
        <input autoComplete='off' ref={inputValue} type="text" autoFocus={true} placeholder="something here" />
        <span onClick={cleanContent} className={style.deleteValue}>X</span>
      </div>
      <button onClick={searchCountry} className={style.acceptValue}>Search country</button>
    </div>
  );
};

export default SearchCountry;

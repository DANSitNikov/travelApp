import React, {useEffect, useRef} from "react";
import style from './searchCountry.module.scss';
import {changeInputValue} from "../../../reducers/searchReducer";

const SearchCountry: React.FC<any> = (props) => {
  const { inputValue } = props;
  const inputValueLocal = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const keyboardHandler = (e: KeyboardEvent) => {
      const { key } = e;
      if (key === 'Enter') {
        if (inputValueLocal && inputValueLocal.current) {
          props.changeInputValue(inputValueLocal.current.value);
        }
      }
    };

    document.addEventListener('keydown', keyboardHandler);

    return () => {
      document.removeEventListener('keydown', keyboardHandler);
    };
  });

  const cleanContent = () => {
    if (inputValueLocal && inputValueLocal.current) {
      inputValueLocal.current.value = '';
      props.changeInputValue(inputValueLocal.current.value);
    }
  };

  const searchCountry = () => {
    if (inputValueLocal && inputValueLocal.current) {
      props.changeInputValue(inputValueLocal.current.value);
    }
  };

  return (
    <div className={style.searchCountry}>
      <div className={style.inputValue}>
        <input onChange={searchCountry} autoComplete='off' ref={inputValueLocal} type="text" autoFocus={true} placeholder="something here" />
        <span onClick={cleanContent} className={style.deleteValue}>X</span>
      </div>
      <button onClick={searchCountry} className={style.acceptValue}>Search country</button>
    </div>
  );
};

export default SearchCountry;

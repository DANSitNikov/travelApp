import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from './Header.module.scss';
import SelectLang from "./selectLang/SelectLang";
import SearchCountryContainer from "./searchCountry/searchCountryContainer";

const Header = () => {
  const [closeStatus, setStatus] = useState(false);

  const closeIt = () => {
    setStatus(!closeStatus);
  };

    return(
        <header className={style.header}>
            <Link to="/">Back to main page</Link>
            {!closeStatus && <SearchCountryContainer />}
            <SelectLang />
            <button onClick={closeIt}>cleaning</button>
        </header>
    );
};

export default Header;

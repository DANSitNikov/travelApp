import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from './Header.module.scss';
import SearchCountry from "./searchCountry/SearchCountry";
import SelectLang from "./selectLang/SelectLang";

const Header = () => {
  const [closeStatus, setStatus] = useState(false);

  const closeIt = () => {
    setStatus(!closeStatus);
  };

    return(
        <header className={style.header}>
            <Link to="/">Back to main page</Link>
            {!closeStatus && <SearchCountry />}
            <SelectLang />
            <button onClick={closeIt}>cleaning</button>
        </header>
    );
};

export default Header;

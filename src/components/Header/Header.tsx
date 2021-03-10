import React, {useState} from "react";
import { Link } from "react-router-dom";
import style from './Header.module.scss';
import SearchCountry from "./searchCountry/SearchCountry";
import SelectLang from "./selectLang/SelectLang";

const Header = () => {
    const [inputStatus, setInputStatus] = useState(false);

    return(
        <header className={style.header}>
            <Link to="/">Back to main page</Link>
            <SearchCountry />
            <SelectLang />
        </header>
    );
};

export default Header;

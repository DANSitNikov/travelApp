import SearchCountry from "./SearchCountry";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({
  inputValue: state.search.inputValue,
  language: state.languages.data,
});

const SearchCountryContainer = connect(mapStateToProps, null)(SearchCountry);

export default SearchCountryContainer;

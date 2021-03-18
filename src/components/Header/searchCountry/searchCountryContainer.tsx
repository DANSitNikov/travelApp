import SearchCountry from "./SearchCountry";
import {connect} from "react-redux";
import {changeInputValue} from "../../../reducers/searchReducer";

const mapStateToProps = (state: any) => ({
  inputValue: state.search.inputValue,
  language: state.languages.data,
});

const SearchCountryContainer = connect(mapStateToProps, {
  changeInputValue,
})(SearchCountry);

export default SearchCountryContainer;
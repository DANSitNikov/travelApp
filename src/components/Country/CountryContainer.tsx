import {connect} from "react-redux";
import Country from "./Country";
import {changeVisibilityToFalse} from "../../reducers/searchReducer";

const mapStateToProps = (state: any) => ({
  language: state.languages.data,
});

const CountryContainer = connect(mapStateToProps, {
  changeVisibilityToFalse
})(Country);

export default CountryContainer;

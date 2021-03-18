import {connect} from "react-redux";
import Header from "./Header";

const mapStateToProps = (state: any) => ({
  visibility: state.search.visibility,
});

const HeaderContainer = connect(mapStateToProps, {})(Header);

export default HeaderContainer;

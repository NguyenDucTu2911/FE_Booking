import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderHome from "./HeaderHome";
import Banner from "./Section/Banner";
import Search from "./Section/Search";
import Fooder from "./Section/Fooder";

class HomePage extends Component {
  render() {
    return (
      <div>
        <>
          <HeaderHome />
          <Banner />
          <Search />
          <Fooder/>
        </>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import ReactLoading from "react-loading";
// import HeaderHome from "./HeaderHome";
// import Banner from "./Section/Banner";
// import Search from "./Section/Search";
// import Doctor from "./Section/Doctor";
// import HealthFacilities from "./Section/HealthFacilities";
// import Fooder from "./Section/Fooder";
// import Map from "./Section/Plugins/Map";
// import Specialties from "./Section/Specialties";
const HeaderHome = lazy(() => import("./HeaderHome"));
const Banner = lazy(() => import("./Section/Banner"));
const Search = lazy(() => import("./Section/Search"));
const Doctor = lazy(() => import("./Section/Doctor"));
const HealthFacilities = lazy(() => import("./Section/HealthFacilities"));
const Fooder = lazy(() => import("./Section/Fooder"));
const Map = lazy(() => import("./Section/Plugins/Map"));
const Specialties = lazy(() => import("./Section/Specialties"));

class HomePage extends Component {
  render() {
    return (
      <div>
        <>
          <Suspense
            fallback={<ReactLoading type={"SpinningBubbles"} color={"blue"} />}
          >
            <HeaderHome />
            <Banner />
            <Search />
            <Doctor />
            <Specialties />
            <HealthFacilities />
            <Map />
            <Fooder />
          </Suspense>
          {/* <HeaderHome />
          <Banner />
          <Search />
          <Doctor />
          <Specialties />
          <HealthFacilities />
          <Map />
          <Fooder /> */}
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

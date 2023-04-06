import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import UserManage from "../containers/System/admin/UserManage";
import DoctorDetails from "../containers/System/admin/DoctorDetails";
import Booking from "../containers/System/Booking/Booking";
import BookingAdmin from "../containers/System/admin/Booking/BookingAdmin";
// import RegisterPackageGroupOrAcc from "../containers/System/RegisterPackageGroupOrAcc";
import Header from "../containers/Header/Header";
class System extends Component {
  render() {
    const { systemMenuPath, isLoggedIn } = this.props;
    return (
      <React.Fragment>
        {isLoggedIn && <Header />}
        <div className="system-container">
          <div className="system-list">
            <Switch>
              <Route path="/system/user-manage" component={UserManage} />
              <Route path="/system/DoctorDetails" component={DoctorDetails} />
              <Route path="/system/Booking" component={Booking} />
              <Route path="/system/BookingAdmin" component={BookingAdmin} />
              {/*<Route path="/system/sale" component={sale} />
              <Route path="/system/importgoods" component={importgoods} />
              <Route path="/system/reportThuoc" component={reportThuoc} />  */}
              <Route
                component={() => {
                  return <Redirect to={systemMenuPath} />;
                }}
              />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);

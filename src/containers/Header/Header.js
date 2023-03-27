import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu, NhanvienMenu } from "./menuApp";
import "./Header.scss";
import { languages, ROLE } from "../../utils";
import { FormattedMessage } from "react-intl";
import _ from "lodash";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuapp: [],
    };
  }
  Changelanguage = (language) => {
    this.props.ChangelanguageApp(language);
  };

  componentDidMount() {
    let { userInfo } = this.props;
    let MENU = [];
    if (userInfo && !_.isEmpty(userInfo)) {
      let role = userInfo.roleid;
      console.log("check id", role);
      if (role === ROLE.admin) {
        MENU = adminMenu;
      }
      if (role === ROLE.QuanLy) {
        MENU = NhanvienMenu;
      }
    }
    this.setState({
      menuapp: MENU,
    });
  }

  render() {
    const { processLogout, language, userInfo } = this.props;

    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={this.state.menuapp} />
        </div>
        <div className="languages">
          <span className="wellcome">
            <FormattedMessage id={"Home_header.wellcome"} />:{" "}
            {userInfo && userInfo.firstName ? userInfo.firstName : ""}
          </span>
          <div
            className={language === languages.VI ? "flag-vn active" : "flag-vn"}
          >
            <span onClick={() => this.Changelanguage(languages.VI)}>VN</span>
          </div>
          <div
            className={language === languages.EN ? "flag-en active" : "flag-en"}
          >
            <span onClick={() => this.Changelanguage(languages.EN)}>EN</span>
          </div>
          {/* nút logout */}
          <div
            className="btn btn-logout"
            onClick={processLogout}
            title="log out"
          >
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    ChangelanguageApp: (language) =>
      dispatch(actions.ChangelanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

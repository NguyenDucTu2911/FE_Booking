import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./HeaderHome.scss";
import { FormattedMessage } from "react-intl";
import { languages } from "../../utils/constant";
import { ChangelanguageApp } from "../../store/actions/appActions";

class HeaderHome extends Component {
  Changelanguage = (language) => {
    this.props.ChangelanguageApp(language);
  };
  toHome = () => {
    if (this.props.history) {
      this.props.history.push("/Home");
    }
  };
  render() {
    let { language } = this.props;
    console.log("check prop", language);
    return (
      <>
        <Navbar
          className="nav-1"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="#">
              <h2 className="logo">Booking</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">
                  <FormattedMessage id="Home_header.Specialties" />
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <FormattedMessage id="Home_header.Medical facilities" />
                </Nav.Link>
                <Nav.Link href="#pricingq">
                  <FormattedMessage id="Home_header.DOCTOR" />
                </Nav.Link>
                <Nav.Link href="#pricing1">
                  <FormattedMessage id="Home_header.examination package" />
                </Nav.Link>
              </Nav>
              <Nav className="languages">
                <Nav.Item
                  className={
                    language === languages.VI ? "flag-vn active" : "flag-vn"
                  }
                >
                  <span onClick={() => this.Changelanguage(languages.VI)}>
                    VN
                  </span>
                </Nav.Item>
                <Nav.Item
                  className={
                    language === languages.EN ? "flag-en active" : "flag-en"
                  }
                >
                  <span onClick={() => this.Changelanguage(languages.EN)}>
                    EN
                  </span>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangelanguageApp: (language) => dispatch(ChangelanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHome);

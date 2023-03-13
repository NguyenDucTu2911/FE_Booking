import React, { Component } from "react";
import { connect } from "react-redux";
import "./Fooder.scss";
import { FormattedMessage, injectIntl } from "react-intl";

class Fooder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fooder">
        <div className="fooder-item">
          <div className="fooder-item_social">
            <div className="Social_fb">
              <a
                href="https://www.facebook.com/TuND29/"
                class="icoFacebook"
                title="Facebook"
              >
                <i class="fab fa-facebook fb"></i>
              </a>
            </div>
            <div className="Social_fb">
              <a
                href="https://www.facebook.com/TuND29/"
                class="icoFacebook"
                title="instagram"
              >
                <i class="fab fa-instagram it"></i>
              </a>
            </div>
            <div className="Social_fb">
              <a
                href="https://www.facebook.com/TuND29/"
                class="icoFacebook"
                title="youtube"
              >
                <i class="fab fa-youtube yt"></i>
              </a>
            </div>
            <div className="Social_fb">
              <a
                href="https://www.facebook.com/TuND29/"
                class="icoFacebook"
                title="twitter"
              >
                <i class="fab fa-twitter-square tw"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="fooder-item">
          <div className="fooder-item_tent">
            <p>© 2023 Copyright 19DTHB3 HUTECH</p>
          </div>
        </div>
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

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Fooder));

import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { languages } from "../../../../utils/constant";
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  initFacebookSDK() {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    let { language } = this.props;
    let locale = language === languages.VI ? "vi_VN" : "en_US";
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.REACT_APP_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: "v2.5",
      });
    };
    // Load the SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = `//connect.facebook.net/${locale}/sdk.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  async componentDidMount() {
    this.initFacebookSDK();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}

    render() {
      let {width, dataHref, numPost} = this.props
      return (
        <div
          className="fb-comments"
          data-href={dataHref}
          data-With={width ? width : ""}
          data-numposts={numPost ? numPost : 5}
        ></div>
      );
    }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);

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
    let { languages } = this.props;
    // let locale = languages === languages.VI ? "vi_VN" : "en_US";
    let locale = "vi_VN";
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.REACT_APP_FACEBOOKCHAT,      
        xfbml            : true,
        version          : 'v15.0'
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
//   <!-- Messenger Plugin chat Code -->
//     <div id="fb-root"></div>

//     <!-- Your Plugin chat code -->
//     <div id="fb-customer-chat" class="fb-customerchat">
//     </div>

//     <script>
//       var chatbox = document.getElementById('fb-customer-chat');
//       chatbox.setAttribute("page_id", "109511894259851");
//       chatbox.setAttribute("attribution", "biz_inbox");
//     </script>

//     <!-- Your SDK code -->
//     <script>
//       window.fbAsyncInit = function() {
//         FB.init({
//           xfbml            : true,
//           version          : 'v15.0'
//         });
//       };

//       (function(d, s, id) {
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s); js.id = id;
//         js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
//         fjs.parentNode.insertBefore(js, fjs);
//       }(document, 'script', 'facebook-jssdk'));
//     </script>
  

  async componentDidMount() {
    this.initFacebookSDK();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    let { dataHref } = this.props;
    return (
      <div
       
        id="fb-customer-chat"  
        className="fb-customerchat"
        data-href={dataHref}
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

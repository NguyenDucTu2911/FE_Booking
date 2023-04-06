import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderHome from "../../HeaderHome";
import "./VerifyEmailBooking.scss";
import * as actions from "../../../../store/actions";
import { verifyCreateBooking } from "../../../../services/userService";

class VerifyEmailBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusVerify: false,
      errCode: "",
    };
  }

  async componentDidMount() {
    if (this.props.location && this.props.location.search) {
      const urlParams = new URLSearchParams(this.props.location.search);
      const token = urlParams.get("token");
      const doctorid = urlParams.get("doctorid");
      let res = await verifyCreateBooking({
        token: token,
        doctorid: doctorid,
      });
      if (res && res.errCode === 0) {
        this.setState({
          statusVerify: true,
        });
      } else {
        this.setState({
          statusVerify: false,
        });
      }
    }
  }

  render() {
    let { statusVerify } = this.state;
    return (
      <>
        <HeaderHome />
        <div className="body">
          <div className="container">
            {statusVerify === true ? (
              <div className="bodyVerify">
                <div className="title">bạn đã đặt lich khám thành công</div>
              </div>
            ) : (
              <div className="bodyVerify">
                <div className="title">
                  lịch hẹn được kích hoạt hoạc không tồn tại!!
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyBooking: () => dispatch(actions.verifyBooking()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmailBooking);

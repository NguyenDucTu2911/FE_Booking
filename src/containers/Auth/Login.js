import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
// import { FormattedMessage } from "react-intl";
import { hendleLoginApi } from "../../services/userService";
import { userLoginSuccess } from "../../store/actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChangeemail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleChangepassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handlelogin = async () => {
    this.setState({
      errMessage: "",
    });
    try {
      let data = await hendleLoginApi(this.state.email, this.state.password);
      if (data && data.errCode !== 0) {
        this.setState({
          errMessage: data.message,
        });
      }
      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user);
        console.log("thanh cong");
      }
    } catch (e) {
      console.log(e.response);
      if (e.response) {
        if (e.response.data) {
          this.setState({
            errMessage: e.response.data.Message,
          });
        }
      }
    }
  };

  hendleLoginkey = (event) => {
    if (event.key === "Enter") {
      this.handlelogin();
    }
  };
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-center text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Tên Đăng Nhập</label>
              <input
                type="text"
                className="form-control"
                placeholder="nhập tên đăng nhập"
                value={this.state.email}
                onChange={(event) => this.handleChangeemail(event)}
                onKeyDown={(event) => this.hendleLoginkey(event)}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Mật Khẩu</label>
              <input
                type="password"
                className="form-control"
                placeholder="nhập mật khẩu"
                value={this.state.password}
                onKeyDown={(event) => this.hendleLoginkey(event)}
                onChange={(event) => this.handleChangepassword(event)}
              />
            </div>

            <div className="col-12 " style={{ color: "red" }}>
              {this.state.errMessage}
            </div>

            <div className="col-12 form-group">
              <button
                className="btn-login"
                onClick={(event) => {
                  this.handlelogin(event);
                }}
              >
                Đăng nhập
              </button>
            </div>
            <div className="col-12 text-center">
              <span className="forgotpass">Quên mật khẩu ?</span>
            </div>
            <div className="col-12 text-center Or-login">
              <span>Hoạc:</span>
            </div>
            <div className="col-12 social-login">
              <i className="fab fa-google-plus social-google"></i>
              <i className="fab fa-facebook social-facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
    userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

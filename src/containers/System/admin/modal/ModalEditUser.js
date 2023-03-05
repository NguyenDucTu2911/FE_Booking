import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { emitter } from "../../../../utils/emitter";

import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";

class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      gender: "",
      roleid: "",
    };
  }
  componentDidMount() {
    let { EditUser } = this.props;
    if (EditUser && !_.isEmpty(EditUser)) {
      this.setState({
        id: EditUser.id,
        firstName: EditUser.firstName,
        lastName: EditUser.lastName,
        email: EditUser.email,
        address: EditUser.address,
        gender: EditUser.gender,
        roleid: EditUser.roleid,
      });
    }
    console.log("helo check", EditUser);
  }

  toggle = () => {
    this.props.toggleEditUserModal();
  };
  hendalOnChaneInput = (even, id) => {
    let copyState = { ...this.state };
    copyState[id] = even.target.value;

    this.setState({
      ...copyState,
    });
  };

  hendalEditUser = () => {
    let check = this.checkValidateInput();
    if (check === true) {
      this.props.SaveUser(this.state);
    }
  };

  checkValidateInput = () => {
    let isvalid = true;
    let arr = ["firstName", "lastName", "email", "address", "gender", "roleid"];
    for (let i = 0; i < arr.length; i++) {
      if (!this.state[arr[i]]) {
        isvalid = false;
        toast.error(`vui lòng nhập: ${arr[i]}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
        break;
      }
    }
    return isvalid;
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className={"ModalEditUserContainer"}
        size="lg"
        centered
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Sửa Thông Tin Người Dùng
          <button
            className="btn-closeModal"
            onClick={() => {
              this.toggle();
            }}
          >
            <i className="fas fa-times-circle close-modal"></i>
          </button>
        </ModalHeader>
        <ModalBody>
          <div className="ModalEditUserBody">
            <div className="item">
              <div className="inputContainer">
                <label>firstName</label>
                <input
                  type="text"
                  onChange={(even) => {
                    this.hendalOnChaneInput(even, "firstName");
                  }}
                  value={this.state.firstName}
                ></input>
              </div>

              <div className="inputContainer">
                <label>lastName</label>
                <input
                  type="lastName"
                  onChange={(even) => {
                    this.hendalOnChaneInput(even, "lastName");
                  }}
                  value={this.state.lastName}
                ></input>
              </div>
            </div>

            <div className="item">
              <div className="inputContainer">
                <label>Email</label>
                <input
                  type="email"
                  onChange={(even) => {
                    this.hendalOnChaneInput(even, "email");
                  }}
                  value={this.state.email}
                ></input>
              </div>
              <div className="inputContainer">
                <label>address</label>
                <input
                  type="text"
                  onChange={(even) => {
                    this.hendalOnChaneInput(even, "address");
                  }}
                  value={this.state.address}
                ></input>
              </div>
            </div>

            <div className="item">
              <div className="inputContainer">
                <label for="inputState">gender</label>
                <select
                  name="gender"
                  id="inputState"
                  className="form-control"
                  onChange={(even) => {
                    this.hendalOnChaneInput(even, "gender");
                  }}
                  value={this.state.gender}
                >
                  <option value="DEFAULT" selected>
                    Chọn...
                  </option>
                  <option value="Nam">Nam</option>
                  <option value="Nư">Nữ</option>
                </select>
              </div>

              <div className="inputContainer">
                <label>roleid</label>
                <input
                  type="type"
                  onChange={(even) => {
                    this.hendalOnChaneInput(even, "roleid");
                  }}
                  value={this.state.roleid}
                ></input>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn-modal"
            color="primary"
            onClick={() => {
              this.hendalEditUser();
            }}
          >
            Lưu
          </Button>
          {""}
          <Button
            className="btn-modal"
            color="secondary"
            onClick={() => {
              this.toggle();
            }}
          >
            Hủy
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
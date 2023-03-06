import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { emitter } from "../../../../utils/emitter";

import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      gender: "",
      roleid: "",
      password: "",
    };
    this.listenToEmitter();
  }

  listenToEmitter() {
    emitter.on("EVEN_CLEAR_MODAL_DATA", () => {
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        gender: "",
        roleid: "",
        password: "",
      });
    });
  }
  componentDidMount() {}

  toggle = () => {
    this.props.toggleUserModal();
  };
  hendalOnChaneInput = (even, id) => {
    let copyState = { ...this.state };
    copyState[id] = even.target.value;

    this.setState({
      ...copyState,
    });
  };

  hendalAddUser = () => {
    let check = this.checkValidateInput();
    if (check === true) {
      this.props.createUser(this.state);
    }
  };

  checkValidateInput = () => {
    let isvalid = true;
    let arr = [
      "firstName",
      "lastName",
      "email",
      "address",
      "gender",
      "roleid",
      "password",
    ];
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
        className={"modalUserContainer"}
        size="lg"
        centered
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Thêm Người Dùng
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
          <div className="modalUserBody">
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

              <div className="inputContainer">
                <label>password</label>
                <input
                  type="password"
                  onChange={(even) => {
                    this.hendalOnChaneInput(even, "password");
                  }}
                  value={this.state.password}
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
              this.hendalAddUser();
            }}
          >
            Thêm
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);

import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { emitter } from "../../../../utils/emitter";
// import "./ModalEditUser.scss";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";
import CommonUtils from "../../../../utils/CommonUtils";

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
      image: "",
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
        image: EditUser.image,
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
  hendalOnChaneImg = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);
      // console.log("check báe64", base64)
      this.setState({
        image: base64,
      });
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
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <div className="item">
                    <div className="inputContainer">
                      <label for="inputfirstNamel4">First Name</label>
                      <input
                        type="text"
                        onChange={(even) => {
                          this.hendalOnChaneInput(even, "firstName");
                        }}
                        value={this.state.firstName}
                        class="form-control"
                        id="inputfirstNamel4"
                        placeholder="firstName"
                      ></input>
                    </div>
                    <div className="inputContainer">
                      <label for="inputlastNamel4">Last Name</label>
                      <input
                        type="text"
                        onChange={(even) => {
                          this.hendalOnChaneInput(even, "lastName");
                        }}
                        value={this.state.lastName}
                        class="form-control"
                        id="inputlastNamel4"
                        placeholder="lastName"
                      ></input>
                    </div>
                  </div>
                  <div className="item">
                    <div className="inputContainer">
                      <label for="inputemaill4">Email</label>
                      <input
                        type="email"
                        onChange={(even) => {
                          this.hendalOnChaneInput(even, "email");
                        }}
                        value={this.state.email}
                        class="form-control"
                        id="inputemaill4"
                        placeholder="Email"
                      ></input>
                    </div>
                    <div className="inputContainer">
                      <label for="inputaddress">Address</label>
                      <input
                        type="text"
                        onChange={(even) => {
                          this.hendalOnChaneInput(even, "address");
                        }}
                        value={this.state.address}
                        class="form-control"
                        id="inputaddress"
                        placeholder="Address"
                      ></input>
                    </div>
                  </div>
                  <div className="item">
                    <div className="inputContainer">
                      <label for="inputState">Gender</label>
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
                        <option value="M">Nam</option>
                        <option value="F">Nữ</option>
                        <option value="O">Khác</option>
                      </select>
                    </div>
                    <div className="inputContainer">
                      <label for="inputRoleid">Roleid</label>
                      <input
                        type="type"
                        onChange={(even) => {
                          this.hendalOnChaneInput(even, "roleid");
                        }}
                        value={this.state.roleid}
                        class="form-control"
                        id="inputRoleid"
                        placeholder="Roleid"
                      ></input>
                    </div>
                  </div>
                  <div className="item">
                    <div className="inputContainer">
                      <label for="image">Anh</label>
                      <input
                        id="image"
                        name="image"
                        type="file"
                        onChange={(even) => {
                          this.hendalOnChaneImg(even, "image");
                        }}
                        // value={Anh}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
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

import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
  hendlegetUser,
  hendleDeletetUser,
  hendlecreateUser,
  hendleEditUser,
} from "../../../services/userService";
import ModalUser from "../admin/modal/ModalUser";
import ModalEditUser from "./modal/ModalEditUser";
import { emitter } from "../../../utils/emitter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class UserManage extends Component {
  //init
  constructor(props) {
    super(props);
    this.state = {
      arrUser: [],

      isOpenModaEditlUser: false,
      UserEdit: {},
    };
  }
  //gán giá trị
  async componentDidMount() {
    await this.getAllFormUser();
  }

  getAllFormUser = async () => {
    let response = await hendlegetUser("ALL");
    console.log(response);
    if (response && response.errCode === 0) {
      this.setState({
        arrUser: response.User,
      });
    }
  };


  //handle edit User
  hendleEditUser = (data) => {
    this.setState({
      isOpenModaEditlUser: true,
      UserEdit: data,
    });
  };
  //edit user
  doEditUser = async (data) => {
    console.log("eddit ủe", data);
    try {
      let res = await hendleEditUser(data);
      if (res && res.errCode !== 0) {
        alert(res.errMessage);
      } else {
        await this.getAllFormUser();
        toast.success("Sửa thông tin người dùng thành công", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        this.setState({
          isOpenModaEditlUser: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  toggleEditUserModal = () => {
    this.setState({
      isOpenModaEditlUser: !this.state.isOpenModaEditlUser,
    });
  };

  render() {
    let arrUser = this.state.arrUser;
    console.log(arrUser);
    return (
      <div className="Manageusers">
      {this.state.isOpenModaEditlUser && (
          <ModalEditUser
            isOpen={this.state.isOpenModaEditlUser}
            toggleEditUserModal={this.toggleEditUserModal}
            EditUser={this.state.UserEdit}
            SaveUser={this.doEditUser}
          />
        )}
        <div className="Manageusers-content">
          <h1 className="Manageusers-title">MANAGE USERS</h1>
        </div>
        <div className="create">
          <button
            className="btn btn-primary px-3"
            // onClick={() => this.hendleAddUser()}
          >
            <i className="fas fa-plus icon"></i>
            Thêm Người Dùng
          </button>
        </div>
        <table>
          <tbody>
            <tr className="taitle">
              <th>firstName</th>
              <th>lastName</th>
              <th>email</th>
              <th>address</th>
              <th>gender</th>
              <th>roleid</th>
              <th>Action</th>
            </tr>
            {arrUser &&
              arrUser.map((item, index) => {
                {
                  /* let date = moment(new Date(item.NgaySinh)).format("DD/MM/YYYY"); */
                }
                return (
                  <>
                    <tr className="item">
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                      {/* <td>{date}</td> */}
                      <td>{item.gender}</td>
                      <td>{item.roleid}</td>
                      <td>
                        <button
                          className="btn-edit"
                           onClick={() => this.hendleEditUser(item)}
                        >
                          <i className="fas fa-user-edit edit-item"></i>
                        </button>

                        <button
                          className="btn-delete"
                          // onClick={() => this.hendalDleteUser(item)}
                        >
                          <i className="far fa-trash-alt delete-item"></i>
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

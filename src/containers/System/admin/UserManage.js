import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { hendlegetUser } from "../../../services/userService";

class UserManage extends Component {
  //init
  constructor(props) {
    super(props);
    this.state = {
      arrUser: [],
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

  render() {
    let arrUser = this.state.arrUser;
    console.log(arrUser);
    return (
      <div className="Manageusers">
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
                          // onClick={() => this.hendleEditUser(item)}
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

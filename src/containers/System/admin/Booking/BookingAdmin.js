import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import * as actions from "../../../../store/actions";
import HeaderHome from "../../../HOMEPAGE/HeaderHome";
import "./BookingAdmin.scss";
import DatePicker from "../../../../components/Input/DatePicker";
import { listBooking } from "../../../../services/userService";
import moment from "moment";

class VerifyEmailBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(new Date()).add(0, "days").startOf("day").valueOf(),
      listBooking: [],
    };
  }

  async componentDidMount() {
    if (this.props.user) {
      let doctorid = this.props.user.id;
      let currentDate = this.state.currentDate;
      let FormatDate = new Date(currentDate).getTime();
      this.getDataBooking(doctorid, FormatDate);
    }
  }

  getDataBooking = async (doctorid, FormatDate) => {
    let res = await listBooking({
      doctorid: doctorid,
      date: FormatDate,
    });
    if (res && res.errCode === 0) {
      this.setState({
        listBooking: res.data,
      });
    }
  };

  onChangeDatepiker = (date) => {
    this.setState(
      {
        currentDate: date[0],
      },
      () => {
        let doctorid = this.props.user.id;
        let currentDate = this.state.currentDate;
        let FormatDate = new Date(currentDate).getTime();
        this.getDataBooking(doctorid, FormatDate);
      }
    );
  };

  render() {
    let { listBooking } = this.state;
    console.log(listBooking);
    return (
      <>
        {/* <HeaderHome /> */}
        <div className="Booking">
          <div className="container">
            <div className="row">
              <div className="Booking-Header">
                <div className="Header_content">
                  <h2>Quản lý lịch khám</h2>
                </div>
              </div>
              <div className="Booking-Body">
                <div className="BodySelect">
                  <DatePicker
                    onChange={this.onChangeDatepiker}
                    className="form-control"
                    value={this.state.currentDate}
                    minDate={
                      new Date(new Date().setDate(new Date().getDate() - 1))
                    }
                  />
                </div>
                <div className="BodyTable " id="father">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">STT</th>
                        {/* <th scope="col">Bác Sĩ</th> */}
                        <th scope="col">Bệnh Nhân</th>
                        <th scope="col">Ngày Khám</th>
                        <th scope="col">Giờ Khám</th>
                        <th scope="col">action</th>
                      </tr>
                    </thead>

                    {listBooking && listBooking.length > 0 ? (
                      listBooking.map((item, index) => {
                        console.log("Á ch3eck", item);
                        return (
                          <tbody>
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              {/* {item && item.BookingNameData && (
                                <td>
                                  {item.BookingNameData.firstName}{" "}
                                  {item.BookingNameData.lastName}
                                </td>
                              )} */}

                              {item && item.BookingData && (
                                <td>{item.BookingData.firstName}</td>
                              )}
                              <td>{item.date}</td>
                              {item && item.timeTypeBooking && (
                                <td>{item.timeTypeBooking.value_en}</td>
                              )}
                              <td>
                                <button className="btn btn-confirm">
                                  Xác Nhận
                                </button>
                                <button className="btn btn-bill">
                                  Gửi Hóa Đơn
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        );
                      })
                    ) : (
                      <tr>Hiện Tại Không Có Lịch Khám</tr>
                    )}
                  </table>
                </div>
              </div>
              <div className="Booking-Footer"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ListBooking: () => {
      dispatch(actions.ListBooking());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmailBooking);

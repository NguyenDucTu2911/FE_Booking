import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import * as actions from "../../../../store/actions";
import HeaderHome from "../../../HOMEPAGE/HeaderHome";
import "./BookingAdmin.scss";
import DatePicker from "../../../../components/Input/DatePicker";
import { listBooking, sendRemedyPost } from "../../../../services/userService";
import moment from "moment";
import RemedyModal from "./RemedyModal";
import { toast } from "react-toastify";
import LoadingOverlay from "react-loading-overlay";

class BookingAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(new Date()).add(0, "days").startOf("day").valueOf(),
      listBooking: [],
      isModalRemedyModal: false,
      dataModal: [],
      isShowLoading: false,
    };
  }

  async componentDidMount() {
    if (this.props.user) {
      this.getDataBooking();
    }
  }

  getDataBooking = async () => {
    let doctorid = this.props.user.id;
    let currentDate = this.state.currentDate;
    let FormatDate = new Date(currentDate).getTime();
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
      async () => {
        await this.getDataBooking();
      }
    );
  };
  closeBooking = () => {
    this.setState({
      isModalRemedyModal: false,
    });
  };

  Confirm = (item) => {
    let data = {
      doctorid: item.doctorId,
      patientid: item.patientid,
      email: item.BookingData.email,
      timeType: item.timeType,
      name: item.BookingData.firstName,
    };
    this.setState({
      isModalRemedyModal: true,
      dataModal: data,
    });
  };

  SendRemedy = async (data) => {
    let { dataModal } = this.state;
    this.setState({
      isShowLoading: true,
    });
    let res = await sendRemedyPost({
      email: data.email,
      image: data.imgBase64,
      doctorId: dataModal.doctorid,
      patientid: dataModal.patientid,
      timeType: dataModal.timeType,
      name: dataModal.name,
    });
    if (res && res.errCode === 0) {
      toast.success("thành công");
      await this.getDataBooking();
      this.setState({
        isModalRemedyModal: false,
        isShowLoading: false,
      });
    } else {
      toast.error("Không thấy bệnh nhân");
      this.setState({
        isShowLoading: false,
      });
    }
  };

  render() {
    let { listBooking, isModalRemedyModal, dataModal } = this.state;
    console.log(listBooking);
    let date = listBooking.date;
    let dateFormat = moment(date).format("DD-MM-YYYY");
    return (
      <>
        <LoadingOverlay
          active={this.state.isShowLoading}
          spinner
          text="Loading..."
        >
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
                                <td>{dateFormat}</td>
                                {item && item.timeTypeBooking && (
                                  <td>{item.timeTypeBooking.value_en}</td>
                                )}
                                <td>
                                  <button
                                    className="btn btn-confirm"
                                    onClick={() => this.Confirm(item)}
                                  >
                                    Xác Nhận
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          );
                        })
                      ) : (
                        <tr>
                          <td
                            colSpan={"6"}
                            style={{ textAlign: "center", color: "red" }}
                          >
                            Hiện Tại Không Có Lịch Khám
                          </td>
                        </tr>
                      )}
                    </table>
                  </div>
                </div>
                <div className="Booking-Footer"></div>
              </div>
            </div>
            <RemedyModal
              isModalRemedyModal={isModalRemedyModal}
              dataModal={dataModal}
              closeBooking={this.closeBooking}
              SendRemedy={this.SendRemedy}
            />
          </div>
        </LoadingOverlay>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingAdmin);

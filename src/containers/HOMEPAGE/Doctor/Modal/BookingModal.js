import React, { Component } from "react";
import { connect } from "react-redux";
import "./BookingModal.scss";
import { getBooking } from "../../../../services/userService";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { NumericFormat } from "react-number-format";
import * as actions from "../../../../store/actions";
import moment from "moment";
import _ from "lodash";
import LoadingOverlay from "react-loading-overlay";

class Oder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrOder: [],
      TimeLine: [],
      firstName: "",
      email: "",
      phonenumber: "",
      isShowLoading: false,
    };
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.dataBookingTime !== this.props.dataBookingTime) {
      let res = await getBooking(this.props.dataBookingTime.doctorid);
      this.setState({
        arrOder: res.data,
        TimeLine: this.props.dataBookingTime,
      });
    }
  }

  async componentDidMount() {}

  onchange = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  saveBooking = () => {
    let { arrOder, TimeLine, email, phonenumber, firstName } = this.state;
    let formatDate = TimeLine.timeTypeData.value_en;

    if (!email) {
      alert("vui lòng nhập gmail");
    }
    if (!phonenumber) {
      alert("vui lòng nhập SDT");
    }
    if (!firstName) {
      alert("vui lòng nhập TÊN");
    }
    this.setState({
      isShowLoading: true,
    });
    this.props.saveBooking({
      email: email,
      doctorid: TimeLine.doctorid,
      date: TimeLine.date,
      timeType: TimeLine.timeType,
      phonenumber: phonenumber,
      firstName: firstName,
      name: arrOder.firstName,
      last: arrOder.lastName,
      formatDate: formatDate,
    });
    this.props.closeBooking();
    this.setState({
      firstName: "",
      email: "",
      phonenumber: "",
      isShowLoading: false,
    });
  };

  render() {
    let { arrOder, TimeLine } = this.state;
    console.log(this.state);
    console.log("check stater", arrOder, TimeLine);
    let { isModalBooking, closeBooking } = this.props;
    return (
      <>
        <LoadingOverlay
          active={this.state.isShowLoading}
          spinner
          text="Loading..."
        >
          <Modal
            isOpen={isModalBooking}
            toggle={closeBooking}
            className={"ModalEditUserContainer"}
            size="lg"
            centered
          >
            <ModalHeader
              toggle={() => {
                this.toggle();
              }}
            >
              Đặt Lịch Khám
              <button className="btn-closeModal" onClick={closeBooking}>
                <i className="fas fa-times-circle close-modal"></i>
              </button>
            </ModalHeader>
            <div className="container ">
              <div className="detail-doc-tor">
                <div className="row">
                  <div className="col-md-12 top">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="img-container">
                              <div
                                class="luoi"
                                width="120"
                                height="120"
                                style={{
                                  backgroundImage: `url(${arrOder.image})`,
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="info">
                              <div className="h2 d-flex mx-2">
                                {arrOder &&
                                  arrOder.positionData &&
                                  arrOder.positionData.value_vi && (
                                    <div className="mx-2">
                                      {arrOder.positionData.value_vi}
                                    </div>
                                  )}
                                {arrOder.firstName} {arrOder.lastName}
                              </div>
                            </div>
                            <div className="info">
                              <div className="Time">
                                <div className="Time">
                                  {TimeLine && TimeLine.timeTypeData && (
                                    <div className="Time_item">
                                      {TimeLine.timeTypeData.value_en}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="price">
                                Gía Khám:
                                {arrOder &&
                                  arrOder.DoctorInfoData &&
                                  arrOder.DoctorInfoData.timeTypePriceId && (
                                    <NumericFormat
                                      value={
                                        arrOder.DoctorInfoData.timeTypePriceId
                                          .value_vi
                                      }
                                      displayType="text"
                                      thousandSeparator={true}
                                      suffix={"VND"}
                                    />
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <form>
                      <div class="form-group">
                        <label for="inputAddress2">Họ Tên</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputAddress2"
                          placeholder="Vui lòng nhập học tên"
                          onChange={(event) =>
                            this.onchange(event, "firstName")
                          }
                          value={this.state.firstName}
                        />
                      </div>
                      <div class="form-row">
                        <div class="form-group">
                          <label for="inputEmail4">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="inputEmail4"
                            placeholder="Nhập Email"
                            onChange={(event) => this.onchange(event, "email")}
                            value={this.state.email}
                          />
                        </div>
                        <div class="form-group">
                          <label for="inputPassword4">Số Điện Thoại</label>
                          <input
                            type="number"
                            class="form-control"
                            id="inputPassword4"
                            placeholder="nhập số Điện Thoại"
                            onChange={(event) =>
                              this.onchange(event, "phonenumber")
                            }
                            value={this.state.phonenumber}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="title-tt">
                          LƯU Ý Thông tin anh/chị cung cấp sẽ được sử dụng làm
                          hồ sơ khám bệnh, khi điền thông tin anh/chị vui lòng:
                          Ghi rõ họ và tên, viết hoa những chữ cái đầu tiên, ví
                          dụ: Trần Văn Phú Điền đầy đủ, đúng và vui lòng kiểm
                          tra lại thông tin trước khi ấn "Xác nhận"
                        </div>
                      </div>
                      <button
                        type="button"
                        class="btn btn-warning"
                        onClick={() => this.saveBooking()}
                      >
                        Xác Nhận Đặt Lịch Khám
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </LoadingOverlay>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // topOder: state.admin.TopOder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveBooking: (data) => {
      dispatch(actions.saveBooking(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Oder);

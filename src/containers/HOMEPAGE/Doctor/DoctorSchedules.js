import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorSchedules.scss";
import * as actions from "../../../store/actions";
import moment from "moment";
import locallization from "moment/locale/vi";
import { getSchedule, getExtraInfo } from "../../../services/userService";
import { NumericFormat } from "react-number-format";
import BookingModal from "./Modal/BookingModal";

class DoctorSchedules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDays: [],
      ArrTime: [],
      ExtraInfo: [],
      isShow: false,
      isModalBooking: false,
      dataBookingTime: {},
    };
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.arrDetailDocTorHome !== this.props.arrDetailDocTorHome) {
      let allDays = this.getAllDay();
      let res = await getSchedule(
        this.props.arrDetailDocTorHome,
        allDays[0].value
      );
      let resExtraInfo = await getExtraInfo(this.props.arrDetailDocTorHome);

      if (
        (res && res.errCode === 0) ||
        (resExtraInfo && resExtraInfo.errCode === 0)
      ) {
        this.setState({
          ArrTime: res.data ? res.data : [],

          ExtraInfo: resExtraInfo.data ? resExtraInfo.data : [],
        });
      }
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async componentDidMount() {
    let allDays = this.getAllDay();
    this.setState({
      allDays: allDays,
    });
  }

  getAllDay = () => {
    let arrDate = [];
    for (let i = 0; i < 7; i++) {
      let object = {};
      let formatUp = moment(new Date()).add(i, "days").format("dddd - DD/MM");
      object.label = this.capitalizeFirstLetter(formatUp);
      //convert unix time
      object.value = moment(new Date()).add(i, "days").startOf("day").valueOf();

      arrDate.push(object);
    }
    return arrDate;
  };

  onChangeSelect = async (event) => {
    if (
      this.props.arrDetailDocTorHome &&
      this.props.arrDetailDocTorHome !== -1
    ) {
      let DoctorId = this.props.arrDetailDocTorHome;
      let date = event.target.value;
      let res = await getSchedule(DoctorId, date);
      if (res && res.errCode === 0) {
        this.setState({
          ArrTime: res.data,
        });
      }
    }
  };

  showHide = (status) => {
    this.setState({
      isShow: status,
    });
  };
  handleOnclick = (item) => {
    this.setState({
      isModalBooking: true,
      dataBookingTime: item,
    });
  };

  closeBooking = () => {
    this.setState({
      isModalBooking: false,
    });
  };

  render() {
    let {
      allDays,
      ArrTime,
      isShow,
      ExtraInfo,
      isModalBooking,
      dataBookingTime,
    } = this.state;
    if (
      ExtraInfo &&
      ExtraInfo.timeTypePriceId &&
      ExtraInfo.timeTypePriceId.value_vi
    ) {
      const price = ExtraInfo.timeTypePriceId.value_vi;
      let formatVND = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(price);
      console.log("check state", formatVND);
    }

    return (
      <>
        <div className="col-md-12">
          <select
            className="select-time"
            onChange={(event) => this.onChangeSelect(event)}
          >
            {allDays &&
              allDays.length > 0 &&
              allDays.map((item, index) => {
                return (
                  <option value={item.value} key={index}>
                    {item.label}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="time col-md-12 my-2">
          <i class="far fa-calendar-alt mr-1"></i>
          Lịch Khám
        </div>
        <div className="DoctorBody d-flex">
          <div className="DoctorTime">
            {ArrTime && ArrTime.length > 0 ? (
              ArrTime.map((item, index) => {
                return (
                  <div
                    onClick={() => this.handleOnclick(item)}
                    className="DoctorTime-item"
                    key={index}
                  >
                    {item.timeTypeData.value_en}
                  </div>
                );
              })
            ) : (
              <div className="DoctorTime_announcement">
                Bác Sĩ kHông Có Lịch Khám Trong Thời gian này vui lòng chọn Thời
                gIan khác
              </div>
            )}
          </div>
          <BookingModal
            isModalBooking={isModalBooking}
            closeBooking={this.closeBooking}
            dataBookingTime={dataBookingTime}
          />

          <div className="DoctorMap">
            <div className="DoctorMap_content">
              <div className="DoctorMap-item">ĐỊA CHỈ KHÁM</div>
              Phòng khám Chuyên khoa Da Liễu
              <br />
              207 Phố Huế - Hai Bà Trưng - Hà Nội
            </div>
            {isShow === false && (
              <div className="DoctorMap_buy">
                Gía Khám:{" "}
                {ExtraInfo && ExtraInfo.timeTypePriceId && (
                  <NumericFormat
                    value={ExtraInfo.timeTypePriceId.value_vi}
                    displayType="text"
                    thousandSeparator={true}
                    suffix={"VND"}
                  />
                )}{" "}
                <span className="detail" onClick={() => this.showHide(true)}>
                  xem chi tiết
                </span>
              </div>
            )}
            {isShow === true && (
              <>
                <div className="">
                  Giá khám{" "}
                  {ExtraInfo && ExtraInfo.timeTypePriceId && (
                    <NumericFormat
                      value={ExtraInfo.timeTypePriceId.value_vi}
                      displayType="text"
                      thousandSeparator={true}
                      suffix={"VND"}
                    />
                  )}{" "}
                  Được ưu tiên khám trước khi đật khám qua
                </div>
                <div className="">
                  Người bệnh có thể thanh toán chi phí bằng hình thức tiền mặt
                  và quẹt thẻ
                </div>
                <div className="DoctorMap_buy">
                  <span className="detail" onClick={() => this.showHide(false)}>
                    Ân bảng giá
                  </span>
                </div>
              </>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedules);

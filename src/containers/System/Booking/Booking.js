import React, { Component } from "react";
import { connect } from "react-redux";
import "../style.scss";
import "./Booking.scss";
import Select from "react-select";
import * as actions from "../../../store/actions";
import { detailDoctor } from "../../../services/userService";
import DatePicker from "../../../components/Input/DatePicker";
import moment from "moment";
import { toast } from "react-toastify";
import _ from "lodash";
import { dateFormat } from "../../../utils";
import { saveSchedule } from "../../../services/userService";

class Booking extends Component {
  //init
  constructor(props) {
    super(props);
    this.state = {
      arrDoctor: [],
      currentDate: "",
      selectedOption: {},
      arrSchedule: [],
    };
  }

  async componentDidMount() {
    await this.props.ALLDocTor();
    await this.props.fetchSchedule();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.getAllDoctor !== this.props.getAllDoctor) {
      let dataSelected = this.buildData(this.props.getAllDoctor);
      this.setState({
        arrDoctor: dataSelected,
      });
    }
    if (prevProps.TIME !== this.props.TIME) {
      let { data } = this.props.TIME;
      if (data && data.length > 0) {
        data = data.map((item) => ({
          ...item,
          Action: false,
        }));
      }
      this.setState({
        arrSchedule: data,
      });
    }
  }
  handleChange = async (selectedOption) => {
    this.setState({ selectedOption });
    let res = await detailDoctor(selectedOption.value);
    if (res && res.errCode === 0 && res.data && res.data.DoctorData) {
      this.setState({
        hasOlData: true,
      });
    } else {
      this.setState({
        hasOlData: false,
      });
    }
  };

  buildData = (input) => {
    let result = [];
    if (input && input.length > 0) {
      input.map((item, index) => {
        let object = {};
        object.label = `${item.firstName} ${item.lastName}`;
        object.value = item.id;
        result.push(object);
      });
    }
    return result;
  };

  onChangeDatepiker = (date) => {
    this.setState({
      currentDate: date[0],
    });
  };

  onClickTime = (time) => {
    let { arrSchedule } = this.state;
    if (arrSchedule && arrSchedule.length > 0) {
      arrSchedule = arrSchedule.map((item, index) => {
        if (item.id === time.id) item.Action = !item.Action;
        return item;
      });
      this.setState({
        arrSchedule: arrSchedule,
      });
    }
  };

  saveSchedule = async () => {
    let result = [];
    let { arrSchedule, selectedOption, currentDate } = this.state;
    if (!selectedOption.value && _.isEmpty(selectedOption.value)) {
      toast.error("vui lòng chọn bác sĩ");
      return;
    }
    if (!currentDate) {
      toast.error("vui long chọn Ngày");
      return;
    }
    // let fomatDate = moment(currentDate).format(dateFormat.SEND_TO_SERVER);
    let fomatDate = new Date(currentDate).getTime();
    if (arrSchedule && arrSchedule.length > 0) {
      let selectTime = arrSchedule.filter((item) => item.Action === true);
      if (selectTime && selectTime.length > 0) {
        // toast.success("save success");
        selectTime.map((time) => {
          let object = {};
          object.doctorid = selectedOption.value;
          object.date = fomatDate;
          object.timeType = time.keyMap;
          result.push(object);
        });
      } else {
        toast.error("vui long chọn giờ");
      }
    }

    let res = await saveSchedule({
      Schedules: result,
      doctorid: selectedOption.value,
      date: fomatDate,
    });
    toast.success("Thêm Lịch Khám Thành Công");
    console.log(res);
  };

  render() {
    const { selectedOption } = this.state;
    const { arrSchedule } = this.state;
    return (
      <div className="container">
        <div className="header-detail">
          <div className="header_title">
            <h2 className="text-center pt-4 pb-4">Lịch Khám</h2>
          </div>
          <div className="header_content">
            <form className="row g-3 pb-3">
              <div className="col-6">
                <div className="Title">Chọn Bác Sĩ</div>
                <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={this.state.arrDoctor}
                />
              </div>
              <div className="col-6">
                <div className="Title">chọn lịch khám</div>
                <DatePicker
                  onChange={this.onChangeDatepiker}
                  className="form-control"
                  value={this.state.currentDate}
                  minDate={
                    new Date(new Date().setDate(new Date().getDate() - 1))
                  }
                />
              </div>
            </form>
            <div className="dateTime">
              {arrSchedule &&
                arrSchedule.length > 0 &&
                arrSchedule.map((item, index) => {
                  return (
                    <button
                      className={
                        item.Action === true
                          ? "btn DoctorTime-item active"
                          : "btn DoctorTime-item"
                      }
                      key={index}
                      onClick={() => this.onClickTime(item)}
                    >
                      {item.value_vi}
                    </button>
                  );
                })}
            </div>
            <div className="button">
              <button
                type="button"
                className={"btn-Create btn btn-primary"}
                onClick={() => this.saveSchedule()}
              >
                Thêm Lịch Khám
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { getAllDoctor: state.admin.getAllDoctor, TIME: state.admin.TIME };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ALLDocTor: () => {
      dispatch(actions.ALLDocTor());
    },
    fetchSchedule: () => {
      dispatch(actions.fetchSchedule());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);

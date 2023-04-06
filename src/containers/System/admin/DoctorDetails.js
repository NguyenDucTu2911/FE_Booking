import React, { Component } from "react";
import { connect } from "react-redux";
import "../style.scss";
import "./DoctorDetails.scss";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import Select from "react-select";
import * as actions from "../../../store/actions";
import { detailDoctor } from "../../../services/userService";
import { CRUD_ACTIONS } from "../../../utils/constant";
const mdParser = new MarkdownIt(/* Markdown-it options */);

class DoctorDetails extends Component {
  //init
  constructor(props) {
    super(props);
    this.state = {
      //SAVE TO MARKDOWN
      contentMarkdown: "",
      contentHTML: "",
      selectedOption: "",
      description: "",
      arrDoctor: [],
      hasOlData: false,
      //SAVE TO INFO DOCTOR
      listPrice: [],
      listPayment: [],
      listProvince: [],
      selectedPrice: "",
      selectedPayment: "",
      selectedProvince: "",
      nameClinic: "",
      addressClinic: "",
      node: "",
    };
  }

  async componentDidMount() {
    await this.props.ALLDocTor();
    await this.props.getRequiredDoctorInfo();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.getAllDoctor !== this.props.getAllDoctor) {
      let dataSelected = this.buildData(this.props.getAllDoctor, "USERS");
      this.setState({
        arrDoctor: dataSelected,
      });
    }
    if (prevProps.RequiredDoctor !== this.props.RequiredDoctor) {
      let { Price, Payment, Province } = this.props.RequiredDoctor;
      let dataSelectedPrice = this.buildData(Price.data, "PRICE");
      let dataSelectedPayment = this.buildData(Payment.data, "PAYMENT");
      let dataSelectedProvince = this.buildData(Province.data, "PROVINCE");
      this.setState({
        listPrice: dataSelectedPrice,
        listPayment: dataSelectedPayment,
        listProvince: dataSelectedProvince,
      });
    }
  }

  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkdown: text,
      contentHTML: html,
    });
  };

  SaveContentMarkDown = () => {
    let { hasOlData } = this.state;
    this.props.saveDetailDoctor({
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      doctorId: this.state.selectedOption.value,
      action: hasOlData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,

      //save info doctor
      priceId: this.state.selectedPrice.value,
      paymentId: this.state.selectedPayment.value,
      provinceId: this.state.selectedProvince.value,
      nameClinic: this.state.nameClinic,
      addressClinic: this.state.addressClinic,
      note: this.state.node,
    });
  };

  handleChange = async (selectedOption) => {
    this.setState({ selectedOption });
    let { listPayment, listPrice, listProvince } = this.state;
    let res = await detailDoctor(selectedOption.value);
    if (res && res.errCode === 0 && res.data && res.data.DoctorData) {
      let markdown = res.data.DoctorData;
      let Clinic = res.data.DoctorInfoData;
      let priceId = "",
        provinceId = "",
        paymentId = "",
        addressClinic = "",
        nameClinic = "",
        note = "",
        selectedPrice = "",
        selectedPayment = "",
        selectedProvince = "";

      if (Clinic) {
        addressClinic = Clinic.addressClinic;
        nameClinic = Clinic.nameClinic;
        note = Clinic.note;
        priceId = Clinic.priceId;
        provinceId = Clinic.provinceId;
        paymentId = Clinic.paymentId;
        selectedPrice = listPrice.find((item) => {
          return item && item.value === priceId;
        });
        selectedPayment = listPayment.find((item) => {
          return item && item.value === paymentId;
        });
        selectedProvince = listProvince.find((item) => {
          return item && item.value === provinceId;
        });
      }

      this.setState({
        contentHTML: markdown.contentHTML,
        contentMarkdown: markdown.contentMarkdown,
        description: markdown.description,
        selectedProvince: selectedProvince,
        selectedPrice: selectedPrice,
        selectedPayment: selectedPayment,

        hasOlData: true,
        addressClinic: addressClinic,
        nameClinic: nameClinic,
        node: note,
      });
    } else {
      this.setState({
        contentMarkdown: "",
        contentHTML: "",
        description: "",

        hasOlData: false,
        addressClinic: "",
        nameClinic: "",
        node: "",
      });
    }
  };

  handleChangeSelactDocTorInfo = async (selectedOption, name) => {
    let StateName = name.name;
    let StateCopy = { ...this.state };
    StateCopy[StateName] = selectedOption;
    this.setState({
      ...StateCopy,
    });
  };

  OnChangeDesc = (event, id) => {
    let CopyState = { ...this.state };
    CopyState[id] = event.target.value;
    this.setState({
      ...CopyState,
    });
  };

  buildData = (input, type) => {
    let result = [];
    if (input && input.length > 0) {
      if (type === "USERS") {
        input.map((item, index) => {
          let object = {};
          object.label = `${item.firstName} ${item.lastName}`;
          object.value = item.id;
          result.push(object);
        });
      }
      if (type === "PRICE") {
        input.map((item, index) => {
          let object = {};
          let Price = `${item.value_vi}`;
          let formatVND = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(Price);

          object.label = formatVND;
          object.value = item.keyMap;
          result.push(object);
        });
      }
      if (type === "PAYMENT" || type === "PROVINCE") {
        input.map((item, index) => {
          let object = {};
          object.label = `${item.value_vi}`;
          object.value = item.keyMap;
          result.push(object);
        });
      }
    }
    return result;
  };

  render() {
    let {
      selectedOption,
      selectedPrice,
      selectedPayment,
      selectedProvince,
      hasOlData,
    } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="header-detail">
            <div className="header_title">
              <h2 className="text-center pt-4 pb-4">Chi Tiết Bác Sĩ</h2>
            </div>
            <div className="header_content">
              <form className="row g-3 pb-3">
                <div className="col-6">
                  <div className="Title">Thông Tin Bác Sĩ</div>
                  <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={this.state.arrDoctor}
                  />
                </div>
                <div className="col-6">
                  <div className="Title">Bác Sĩ</div>
                  <textarea
                    className="form-control"
                    onChange={(event) =>
                      this.OnChangeDesc(event, "description")
                    }
                    value={this.state.description}
                  ></textarea>
                </div>
              </form>

              <form className="row g-3 pb-3">
                <div className="col-4">
                  <div className="Title">Chọn Gía</div>
                  <Select
                    value={selectedPrice}
                    onChange={this.handleChangeSelactDocTorInfo}
                    options={this.state.listPrice}
                    placeholder={"Chọn Gía"}
                    name={"selectedPrice"}
                  />
                </div>
                <div className="col-4">
                  <div className="Title">Chọn Phuơng Thức Thanh Toán</div>
                  <Select
                    value={selectedPayment}
                    onChange={this.handleChangeSelactDocTorInfo}
                    options={this.state.listPayment}
                    placeholder={"Phuơng Thức Thanh Toán"}
                    name={"selectedPayment"}
                  />
                </div>
                <div className="col-4">
                  <div className="Title">Chọn Tỉnh Thành</div>
                  <Select
                    value={selectedProvince}
                    onChange={this.handleChangeSelactDocTorInfo}
                    placeholder={"Chọn Tỉnh Thành"}
                    options={this.state.listProvince}
                    name={"selectedProvince"}
                  />
                </div>
              </form>
              <form className="row g-3 pb-3">
                <div className="col-4">
                  <div className="Title">Tên Phòng Khám</div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter password"
                    id="pwd"
                    value={this.state.nameClinic}
                    onChange={(event) => this.OnChangeDesc(event, "nameClinic")}
                  />
                </div>
                <div className="col-4">
                  <div className="Title">Địa Chỉ Phòng Khám</div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter password"
                    id="pwd"
                    value={this.state.addressClinic}
                    onChange={(event) =>
                      this.OnChangeDesc(event, "addressClinic")
                    }
                  />
                </div>
                <div className="col-4">
                  <div className="Title">Note</div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter password"
                    id="pwd"
                    value={this.state.node}
                    onChange={(event) => this.OnChangeDesc(event, "node")}
                  />
                </div>
              </form>
            </div>
          </div>
          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
            value={this.state.contentMarkdown}
          />
          <div className="btn-bu mt-3">
            <button
              className={
                hasOlData === true
                  ? "save btn btn-primary float-end"
                  : "create btn btn-primary float-end"
              }
              style={{ width: "60px", margin: "0 0 12px 0" }}
              onClick={() => this.SaveContentMarkDown()}
            >
              {hasOlData === true ? <span>Lưu</span> : <span>Tạo</span>}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getAllDoctor: state.admin.getAllDoctor,
    RequiredDoctor: state.admin.RequiredDoctor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ALLDocTor: () => {
      dispatch(actions.ALLDocTor());
    },
    getRequiredDoctorInfo: () => {
      dispatch(actions.fetchRequiredDoctorInfo());
    },
    saveDetailDoctor: (data) => dispatch(actions.saveDetailDoctor(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetails);

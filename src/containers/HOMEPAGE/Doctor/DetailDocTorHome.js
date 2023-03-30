import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderHome from "../HeaderHome";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "./DetailDocTorHome.scss";
import Select from "react-select";
import { detailDoctor } from "../../../services/userService";

import * as actions from "../../../store/actions";

class DetailDocTorHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDetailDocTorHome: [],
    };
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (prevProps.topDetailDocTorHome !== this.props.topDetailDocTorHome) {
  //     this.setState({
  //       arrDetailDocTorHome: this.props.topDetailDocTorHome,
  //     });
  //   }
  // }

  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      let res = await detailDoctor(id);
      console.log("alooo", res.data.positionData.value_vi);

      if (res && res.errCode === 0) {
        this.setState({
          arrDetailDocTorHome: res.data,
        });
      }
      // console.log("tune", res);
      // await this.props.detailDoctorAction(id);
    }
  }
  render() {
    console.log(this.state.arrDetailDocTorHome);

    let { arrDetailDocTorHome } = this.state;
    // console.log("alooo", arrDetailDocTorHome.positionData.value_vi);
    // console.log("alooo", arrDetailDocTorHome.DoctorData.description);

    // console.log("doctor", this.props.match.params.id);
    const { selectedOption } = this.state;
    return (
      <>
        <HeaderHome />
        <div className="container ">
          <div className="nav-doctor">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Typography color="text.primary">DocTor</Typography>
            </Breadcrumbs>
          </div>
          <div className="detail-doc-tor">
            <div className="row">
              <div className="col-md-12">
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
                              backgroundImage: `url(${arrDetailDocTorHome.image})`,
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="info">
                          <div className="h2 d-flex mx-2">
                            {arrDetailDocTorHome &&
                              arrDetailDocTorHome.positionData &&
                              arrDetailDocTorHome.positionData.value_vi && (
                                <div className="mx-2">
                                  {arrDetailDocTorHome.positionData.value_vi}
                                </div>
                              )}
                            {arrDetailDocTorHome.firstName}{" "}
                            {arrDetailDocTorHome.lastName}
                          </div>
                        </div>
                        <div className="info">
                          <div className="bs">
                            {arrDetailDocTorHome &&
                              arrDetailDocTorHome.DoctorData &&
                              arrDetailDocTorHome.DoctorData.description && (
                                <div>
                                  {arrDetailDocTorHome.DoctorData.description}
                                </div>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="time col-md-2">
                  <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    // options={}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="time col-md-12 my-2">
                  <i class="far fa-calendar-alt mr-1"></i>
                  Lịch Khám
                </div>
                <div className="DoctorBody d-flex">
                  <div className="DoctorTime">
                    <div className="DoctorTime-item">14:30 - 15:00</div>
                    <div className="DoctorTime-item">14:30 - 15:00</div>

                    <div className="DoctorTime-item">14:30 - 15:00</div>
                    <div className="DoctorTime-item ">14:30 - 15:00</div>
                    <div className="DoctorTime-item ">14:30 - 15:00</div>
                    <div className="DoctorTime-item ">14:30 - 15:00</div>
                  </div>
                  <div className="DoctorMap">
                    ĐỊA CHỈ KHÁM Phòng khám Chuyên khoa Da Liễu 207 Phố Huế -
                    Hai Bà Trưng - Hà Nội
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="DoctorDetail">
                  {arrDetailDocTorHome 
                  && arrDetailDocTorHome.DoctorData 
                  && arrDetailDocTorHome.DoctorData.contentHTML && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: arrDetailDocTorHome.DoctorData.contentHTML,
                  }}
                ></div>
              )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // topDetailDocTorHome: state.admin.TopDetailDocTorHome,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // detailDoctorAction: () => {
    //   dispatch(actions.detailDoctorAction());
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDocTorHome);
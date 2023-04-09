import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderHome from "../HeaderHome";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "./DetailDocTorHome.scss";
import Select from "react-select";
import { detailDoctor } from "../../../services/userService";
import DoctorSchedules from "./DoctorSchedules";
import Comment from "./Plugins/Comment";
import Likes from "./Plugins/likes";
import * as actions from "../../../store/actions";

class DetailDocTorHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDetailDocTorHome: [],
      currentDoctorId: -1,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.topDetailDocTorHome !== this.props.topDetailDocTorHome) {
      this.setState({
        arrDetailDocTorHome: this.props.topDetailDocTorHome,
      });
    }
  }

  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      this.setState({
        currentDoctorId: id,
      });
      let res = await detailDoctor(id);
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
    let cur =
      process.env.REACT_APP_IS_LOCALHOST === 1
        ? "https://2bee-113-161-66-128.ngrok-free.app/"
        : window.location.href;
    console.log("hello", cur);
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
                        <div className="plugin">
                          <Likes />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <DoctorSchedules
                  arrDetailDocTorHome={this.state.currentDoctorId}
                />
              </div>
              <div className="col-md-12">
                <div className="DoctorDetail">
                  {arrDetailDocTorHome &&
                    arrDetailDocTorHome.DoctorData &&
                    arrDetailDocTorHome.DoctorData.contentHTML && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: arrDetailDocTorHome.DoctorData.contentHTML,
                        }}
                      ></div>
                    )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="comment">
                  <Comment dataHref={cur} width={"100%"} />
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

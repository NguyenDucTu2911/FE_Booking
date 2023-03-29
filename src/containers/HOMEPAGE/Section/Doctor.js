import React, { Component } from "react";
import { connect } from "react-redux";
import "./Doctor.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage, injectIntl } from "react-intl";
import * as actions from "../../../store/actions";
import ReactLoading from "react-loading";

class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrdoctor: [],
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.topDoctor !== this.props.topDoctor) {
      this.setState({
        arrdoctor: this.props.topDoctor,
      });
    }
  }

  async componentDidMount() {
    await this.props.loadDoctor();
  }
  render() {
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    let { arrdoctor } = this.state;
    console.log("checjdoctor", arrdoctor);
    arrdoctor = arrdoctor.concat(arrdoctor).concat(arrdoctor);
    return (
      <div className="Doctor">
        <div className="Doctor-Title">
          <h3>
            <FormattedMessage id="Home_header.Featured Doctor Last Week" />
          </h3>
        </div>

        <Slider {...settings}>
          {arrdoctor &&
            arrdoctor.length > 0 &&
            arrdoctor.map((item, index) => {
              let img = "";
              if (item.image) {
                img = Buffer(item.image, "base64").toString("binary");
              }
              return (
                <div className="customize" key={index}>
                  <div className="container">
                    <div className="img-customize">
                      <div
                        class="luoi"
                        width="120"
                        height="120"
                        style={{ backgroundImage: `url(${img})` }}
                      />
                    </div>
                    <div className="Doctor-customize">
                      <h4 className="DT">
                        {item.positionData.value_vi} {item.firstName}{" "}
                        {item.lastName}
                      </h4>
                      <h5 className="K">
                        <span>Da liễu</span>
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    topDoctor: state.admin.TopDocTor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadDoctor: () => {
      dispatch(actions.loadDoctor());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);

import React, { Component } from "react";
import { connect } from "react-redux";
import "./Doctor.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage, injectIntl } from "react-intl";

class Doctor extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="Doctor">
        <div className="Doctor-Title">
          <h3>
            <FormattedMessage id="Home_header.Featured Doctor Last Week" />
          </h3>
        </div>

        <Slider {...settings}>
          <div className="customize">
            <div className="container">
              <div className="img-customize">
                <img
                  class="luoi"
                  width="120"
                  height="120"
                  alt="Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng"
                  src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                  data-src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                ></img>
              </div>
              <div className="Doctor-customize">
                <h4 className="DT">
                  Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng
                </h4>
                <h5 className="K">
                  <span>Da liễu</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="customize">
            <div className="container">
              <div className="img-customize">
                <img
                  class="luoi"
                  width="120"
                  height="120"
                  alt="Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng"
                  src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                  data-src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                ></img>
              </div>
              <div className="Doctor-customize">
                <h4 className="DT">
                  Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng
                </h4>
                <h5 className="K">
                  <span>Da liễu</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="customize">
            <div className="container">
              <div className="img-customize">
                <img
                  class="luoi"
                  width="120"
                  height="120"
                  alt="Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng"
                  src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                  data-src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                ></img>
              </div>
              <div className="Doctor-customize">
                <h4 className="DT">
                  Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng
                </h4>
                <h5 className="K">
                  <span>Da liễu</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="customize">
            <div className="container">
              <div className="img-customize">
                <img
                  class="luoi"
                  width="120"
                  height="120"
                  alt="Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng"
                  src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                  data-src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                ></img>
              </div>
              <div className="Doctor-customize">
                <h4 className="DT">
                  Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng
                </h4>
                <h5 className="K">
                  <span>Da liễu</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="customize">
            <div className="container">
              <div className="img-customize">
                <img
                  class="luoi"
                  width="120"
                  height="120"
                  alt="Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng"
                  src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                  data-src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                ></img>
              </div>
              <div className="Doctor-customize">
                <h4 className="DT">
                  Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng
                </h4>
                <h5 className="K">
                  <span>Da liễu</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="customize">
            <div className="container">
              <div className="img-customize">
                <img
                  class="luoi"
                  width="120"
                  height="120"
                  alt="Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng"
                  src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                  data-src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                ></img>
              </div>
              <div className="Doctor-customize">
                <h4 className="DT">
                  Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng
                </h4>
                <h5 className="K">
                  <span>Da liễu</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="customize">
            <div className="container">
              <div className="img-customize">
                <img
                  class="luoi"
                  width="120"
                  height="120"
                  alt="Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng"
                  src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                  data-src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                ></img>
              </div>
              <div className="Doctor-customize">
                <h4 className="DT">
                  Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng
                </h4>
                <h5 className="K">
                  <span>Da liễu</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="customize">
            <div className="container">
              <div className="img-customize">
                <img
                  class="luoi"
                  width="120"
                  height="120"
                  alt="Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng"
                  src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                  data-src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                ></img>
              </div>
              <div className="Doctor-customize">
                <h4 className="DT">
                  Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng
                </h4>
                <h5 className="K">
                  <span>Da liễu</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="customize">
            <div className="container">
              <div className="img-customize">
                <img
                  class="luoi"
                  width="120"
                  height="120"
                  alt="Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng"
                  src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                  data-src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                ></img>
              </div>
              <div className="Doctor-customize">
                <h4 className="DT">
                  Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng
                </h4>
                <h5 className="K">
                  <span>Da liễu</span>
                </h5>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);

import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialties.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage, injectIntl } from "react-intl";

class Specialties extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="Specialties">
        <div className="container">
          <div className="Specialties-Title">
            <h3>
              <FormattedMessage id="Home_header.Popular specialties" />
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
                    alt="Thần Kinh"
                    src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg"
                    data-src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg"
                  ></img>
                </div>
                <div className="Specialties-customize">
                  <h4 className="DT">Thần Kinh</h4>
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
                    src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120933-tieu-hoa.jpg"
                    data-src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120933-tieu-hoa.jpg"
                  ></img>
                </div>
                <div className="Specialties-customize">
                  <h4 className="DT">Tiêu Hóa</h4>
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
                    src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120741-tim-mach.jpg"
                    data-src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120741-tim-mach.jpg"
                  ></img>
                </div>
                <div className="Specialties-customize">
                  <h4 className="DT">Tim Mạch</h4>
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
                    src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121146-tai-mui-hong.jpg"
                    data-src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121146-tai-mui-hong.jpg"
                  ></img>
                </div>
                <div className="Specialties-customize">
                  <h4 className="DT">Tai Mũi Họng</h4>
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
                    src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121215-cot-song.jpg"
                    data-src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121215-cot-song.jpg"
                  ></img>
                </div>
                <div className="Specialties-customize">
                  <h4 className="DT">Cột Sống</h4>
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
                    src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121232-y-hoc-co-truyen.jpg"
                    data-src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121232-y-hoc-co-truyen.jpg"
                  ></img>
                </div>
                <div className="Specialties-customize">
                  <h4 className="DT">Y Học Cổ Chuyền</h4>
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
                    src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg"
                    data-src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg"
                  ></img>
                </div>
                <div className="Specialties-customize">
                  <h4 className="DT">Cơ Xương Khớp</h4>
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
                    src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121305-cham-cuu.jpg"
                    data-src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/121305-cham-cuu.jpg"
                  ></img>
                </div>
                <div className="Specialties-customize">
                  <h4 className="DT">Châm Cứu</h4>
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
                    src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/181822-san-phu-khoa.jpg"
                    data-src="https://cdn.bookingcare.vn/fr/w300/2019/12/16/181822-san-phu-khoa.jpg"
                  ></img>
                </div>
                <div className="Specialties-customize">
                  <h4 className="DT">Sản Phụ Khoa</h4>
                </div>
              </div>
            </div>
          </Slider>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialties);

import React, { Component } from "react";
import { connect } from "react-redux";
import "./HealthFacilities.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage, injectIntl } from "react-intl";

class HealthFacilities extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="HealthFacilities">
     
        <div className="HealthFacilities-Title">
          <h3>
            <FormattedMessage id="Home_header.Outstanding medical facility" />
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
                  src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg"
                  data-src="https://cdn.bookingcare.vn/fr/w500/2018/06/18/083122lo-go-viet-duc.jpg"
                ></img>
              </div>
              <div className="HealthFacilities-customize">
                <h4 className="DT">
                Bệnh viện Hữu nghị Việt Đức
                </h4>
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
                  src="https://cdn.bookingcare.vn/fr/w500/2019/03/11/152704logo-bvcr-moi.jpg"
                  data-src="https://cdn.bookingcare.vn/fr/w500/2019/03/11/152704logo-bvcr-moi.jpg"
                ></img>
              </div>
              <div className="HealthFacilities-customize">
                <h4 className="DT">
                  Bệnh Viện Trợ Dẫy
                </h4>
                
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
                  src="https://cdn.bookingcare.vn/fr/w500/2022/07/14/155206-logo-y-duoc-1.jpg"
                  data-src="https://cdn.bookingcare.vn/fr/w500/2022/07/14/155206-logo-y-duoc-1.jpg"
                ></img>
              </div>
              <div className="HealthFacilities-customize">
                <h4 className="DT">
                Phòng khám Bệnh viện Đại học Y Dược 1
                </h4>
                
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
                  src="https://cdn.bookingcare.vn/fr/w500/2019/07/31/085056logobenhvien108.jpg"
                  data-src="https://cdn.bookingcare.vn/fr/w500/2019/07/31/085056logobenhvien108.jpg"
                ></img>
              </div>
              <div className="HealthFacilities-customize">
                <h4 className="DT">
                Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân đội 108
                </h4>
                
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
                  src="https://cdn.bookingcare.vn/fr/w500/2020/05/28/151320-benhvienhungviet1.png"
                  data-src="https://cdn.bookingcare.vn/fr/w500/2020/05/28/151320-benhvienhungviet1.png"
                ></img>
              </div>
              <div className="HealthFacilities-customize">
                <h4 className="DT">
                Bệnh viện Ung bướu Hưng Việt
                </h4>
                
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
                  src="https://cdn.bookingcare.vn/fr/w500/2021/04/07/103904-logo-thucuc.png"
                  data-src="https://cdn.bookingcare.vn/fr/w500/2021/04/07/103904-logo-thucuc.png"
                ></img>
              </div>
              <div className="HealthFacilities-customize">
                <h4 className="DT">
                Hệ thống Y tế Thu Cúc TCI
                </h4>
                
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
                  src="https://cdn.bookingcare.vn/fr/w500/2022/01/28/165735-logo-hong-phat.png"
                  data-src="https://cdn.bookingcare.vn/fr/w500/2022/01/28/165735-logo-hong-phat.png"
                ></img>
              </div>
              <div className="HealthFacilities-customize">
                <h4 className="DT">
                Bệnh viện Đa khoa Hồng Phát
                </h4>
                
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

export default connect(mapStateToProps, mapDispatchToProps)(HealthFacilities);

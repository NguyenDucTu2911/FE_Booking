import React, { Component } from "react";
import { connect } from "react-redux";
import "./RemedyModal.scss";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import CommonUtils from "../../../../utils/CommonUtils";

import _ from "lodash";

class RemedyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      imgBase64: "",
    };
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.dataModal !== this.props.dataModal) {
      this.setState({
        email: this.props.dataModal.email,
      });
    }
  }

  async componentDidMount() {
    if (this.props.dataModal) {
      this.setState({
        email: this.props.dataModal.email,
      });
    }
  }
  onChangeEmail = (even) => {
    this.setState({
      email: even.target.value,
    });
  };
  hendalOnChaneImg = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);
      this.setState({
        imgBase64: base64,
      });
    }
  };

  sendBooking = () => {
    this.props.SendRemedy(this.state);
    console.log("chwck thong tin", this.state);
  };

  render() {
    let { isModalRemedyModal, dataModal, closeBooking } = this.props;
    return (
      <>
        <Modal
          isOpen={isModalRemedyModal}
          toggle={closeBooking}
          className={"ModalEditUserContainer"}
          size="md"
          centered
        >
          <ModalHeader
            toggle={() => {
              this.toggle();
            }}
          >
            Gửi Hóa Đơn Thanh Toán
            <button className="btn-closeModal" onClick={closeBooking}>
              <i className="fas fa-times-circle close-modal"></i>
            </button>
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-6 form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  type="email"
                  value={this.state.email}
                  onChange={(even) => this.onChangeEmail(even)}
                />
              </div>
              <div className="col-6 form-group">
                <label>Chọn File Đơn Thuốc</label>
                <input
                  className="form-control-file"
                  type="file"
                  onChange={(event) => this.hendalOnChaneImg(event)}
                />
              </div>
            </div>
          </ModalBody>
          <div class="modal-footer">
            <button
              onClick={() => this.sendBooking()}
              type="button"
              class="btn btn-primary btn-send"
            >
              Gửi
            </button>
          </div>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(RemedyModal);

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

class DetailDocTorHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   componentDidUpdate(prevProps, prevState, snapshot) {
  //     if (prevProps.topDetailDocTorHome !== this.props.topDetailDocTorHome) {
  //       this.setState({
  //         arrDetailDocTorHome: this.props.topDetailDocTorHome,
  //       });
  //     }
  //   }

  async componentDidMount() {
    await this.props.detailDoctorAction();
  }
  render() {
    console.log(this.props);
    return;
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

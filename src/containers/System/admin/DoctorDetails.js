import React, { Component } from "react";
import { connect } from "react-redux";
import "../style.scss";
import "./DoctorDetails.scss";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import Select from "react-select";
import * as actions from "../../../store/actions";

const mdParser = new MarkdownIt(/* Markdown-it options */);

class DoctorDetails extends Component {
  //init
  constructor(props) {
    super(props);
    this.state = {
      contentMarkdown: "",
      contentHTML: "",
      selectedOption: "",
      description: "",
      arrDoctor: [],
    };
  }

  async componentDidMount() {
    await this.props.ALLDocTor();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.getAllDoctor !== this.props.getAllDoctor) {
      let dataSelected = this.buildData(this.props.getAllDoctor);
      this.setState({
        arrDoctor: dataSelected,
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
    this.props.saveDetailDoctor({
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      doctorId: this.state.selectedOption.value,
    });
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  OnChangeDesc = (event) => {
    this.setState({
      description: event.target.value,
    });
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

  render() {
    console.log("checkprop", this.state);
    const { selectedOption } = this.state;
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
                    onChange={(event) => this.OnChangeDesc(event)}
                    value={this.state.description}
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
            // value={this.state.contentMarkdown}
          />
          <div className="btn-bu mt-3">
            <button
              className=" btn btn-primary float-end"
              style={{ width: "60px", margin: "0 0 12px 0" }}
              onClick={() => this.SaveContentMarkDown()}
            >
              Lưu
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ALLDocTor: () => {
      dispatch(actions.ALLDocTor());
    },
    saveDetailDoctor: (data) => dispatch(actions.saveDetailDoctor(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetails);

import React, { Component } from "react";
import { connect } from "react-redux";
import "./Search.scss";
import { FormattedMessage, injectIntl } from "react-intl";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  heandSearch(event, id) {
    let valueinput = event.target.value;
    let statecopy = { ...this.state };
    console.log(statecopy);
    statecopy[id] = valueinput;
    this.setState({
      ...statecopy,
    });
  }
  render() {
    const { intl } = this.props;
    return (
      <div className="section-search">
        <div className="search_content">
          <div className="search-title">
            <h3>
              <FormattedMessage id="Home_header.search" />
            </h3>
          </div>
          <div className="search">
            <div className="search-item">
              <div className="search-left">
                <input
                  type="search"
                  placeholder={intl.formatMessage({
                    id: "Home_header.ent",
                    // defaultMessage: "",
                  })}
                  className="input-search"
                  name="search"
                  onChange={(event) => this.heandSearch(event, "search")}
                  value={this.state.search}
                ></input>
              </div>
              <div className="search-right">
                <button className="btn-search">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div className="search-buttom">
              <p className="search-buttom-text">
                <FormattedMessage id="Home_header.Top_Lookup" />
              </p>
              <div className="buttom-item">
                <div className="btn-search_item">
                  <button className="btn-search_item">
                    <FormattedMessage id="Home_header.DOCTOR" />
                  </button>
                </div>
                <div className="btn-search_item">
                  <button className="btn-search_item">
                    <FormattedMessage id="Home_header.examination package" />
                  </button>
                </div>
                <div className="btn-search_item">
                  <button className="btn-search_item">
                    <FormattedMessage id="Home_header.Specialties" />
                  </button>
                </div>
                <div className="btn-search_item">
                  <button className="btn-search_item">
                    <FormattedMessage id="Home_header.Medical facilities" />
                  </button>
                </div>
                <div className="btn-search_item">
                  <button className="btn-search_item">
                    <FormattedMessage id="Home_header.Outstanding Doctor" />
                  </button>
                </div>
                <div className="btn-search_item">
                  <button className="btn-search_item">
                    <FormattedMessage id="Home_header.Diagnostics" />
                  </button>
                </div>
              </div>
            </div>
          </div>
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

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Search));

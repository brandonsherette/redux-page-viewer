import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageViewer } from './redux-page-viewer/index';

// combine pages
import pageConfig from './page.config';

class AppComponent extends Component {
  render() {
    return (
      <div className="app-component">
        <div className="app-header">
          <h1>Redux Page Viewer</h1>
          <h5>Redux Page Viewer Example</h5>
        </div>
        <div className="container">
          <PageViewer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
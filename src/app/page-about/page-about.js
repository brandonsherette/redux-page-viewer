import React from 'react';
import { connect } from 'react-redux';
import { gotoPage } from '../redux-page-viewer/index';

const PageAbout = ({gotoHome}) => (
  <section>
    <h1>About</h1>
    <p>About information goes here.</p>
    <div className="break-4x">
      <button type="button" onClick={gotoHome} className="btn btn-primary">Return Home</button>
    </div>
  </section>
);

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    gotoHome: () => { dispatch(gotoPage('Home'))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageAbout);
import React from 'react';
import { connect } from 'react-redux';
import { gotoPage } from '../redux-page-viewer/index';

const PageHome = ({gotoAbout}) => (
  <section>
    <h1>Home</h1>
    <p>Home page content here.</p>
    <div className="break-4x">
      <button type="button" onClick={gotoAbout} className="btn btn-primary">Goto About</button>
    </div>
  </section>
);

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    gotoAbout: () => { dispatch(gotoPage('About'))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageHome);
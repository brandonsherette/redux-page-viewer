import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { gotoPage } from '../redux-page-viewer/index';

const PageHome = ({greeting, gotoAbout}) => (
  <section>
    <h1>Home</h1>
    <p>Home page content here.</p>
    <p>{greeting}</p>
    <div className="break-4x">
      <button type="button" onClick={gotoAbout} className="btn btn-primary">Goto About</button>
    </div>
  </section>
);

PageHome.propTypes = {
  greeting: PropTypes.string
};

PageHome.defaultProps = {
  greeting: 'Hello World'
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    gotoAbout: () => { dispatch(gotoPage('About'))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageHome);
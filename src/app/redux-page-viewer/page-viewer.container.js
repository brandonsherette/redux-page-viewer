import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import Page from './page';

require('./page-viewer.scss');

class PageViewer extends Component {
  render() {
    const { page, pageProps, transitionDirection } = this.props;

    if (!page) {
      return null;
    }

    return (
      <div className="page-viewer">
        <ReactCSSTransitionGroup className={'page-wrapper ' + 'trans-dir-' + transitionDirection} transitionName="pageFade" transitionEnterTimeout={750} transitionLeaveTimeout={300}>
          <Page key={page.slug}><page.component key={page.slug} {...pageProps} /></Page>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

PageViewer.propTypes = {
  transitionDirection: React.PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    page: state.pageViewer.activePage,
    pageProps: state.pageViewer.activePageProps,
    transitionDirection: state.pageViewer.transitionDirection
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageViewer);
import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { init } from './actions';

require('./page-viewer.scss');

class PageViewer extends Component {
  componentDidMount() {
    this.props.loadFirstPage();
  }

  render() {
    const { children, transitionDirection } = this.props;
    
    return (
      <div className="page-viewer">
        <div className={'page-wrapper ' + 'trans-dir-' + transitionDirection}>
          <ReactCSSTransitionGroup transitionName="pageFade" transitionEnterTimeout={750} transitionLeaveTimeout={300}>
            {children}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}

PageViewer.propTypes = {
  transitionDirection: React.PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    transitionDirection: state.pageViewer.transitionDirection
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadFirstPage: () => { dispatch(init()) }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageViewer);
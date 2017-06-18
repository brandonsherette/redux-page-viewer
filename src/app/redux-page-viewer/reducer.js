import React from 'react';
import ActionTypes from './actions';
import PageUtil from './page.util';

const initialState = {
  activePage: null,
  transitionDirection: PageUtil.Direction.FORWARD
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GOTO_PAGE: {
      return Object.assign({}, state, {
        activePage: action.payload
      });
    }

    case ActionTypes.INIT: {      
      return Object.assign({}, state, {
        activePage: PageUtil.getFirstPage()
      });
    }

    default: {
      return state;
    }
  }
};

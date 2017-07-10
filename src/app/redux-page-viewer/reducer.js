import React from 'react';
import ActionTypes from './actions';
import PageUtil from './page.util';

const initialState = {
  activePage: null,
  activePageProps: null,
  transitionDirection: PageUtil.Direction.FORWARD
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GOTO_PAGE: {
      return Object.assign({}, state, {
        activePage: action.payload.page,
        activePageProps: action.payload.pageProps
      });
    }

    case ActionTypes.INIT: {      
      return Object.assign({}, state, {
        activePage: action.payload.page || PageUtil.getFirstPage(),
        activePageProps: action.payload.pageProps || null
      });
    }

    default: {
      return state;
    }
  }
};

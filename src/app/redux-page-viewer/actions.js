import PageUtil from './page.util';

export const ActionTypes = {
  GOTO_PAGE: 'REDUX_PAGE_VIEWER_GOTO_PAGE',
  INIT: 'REDUX_PAGE_VIEWER_INIT'
};

export const gotoPage = (page) => {
  // find page 
  const nextPage = PageUtil.getPage(page);

  return {
    type: ActionTypes.GOTO_PAGE,
    payload: {
      page: nextPage
    }
  };
};

export const init = () => {
  return { type: ActionTypes.INIT };
};
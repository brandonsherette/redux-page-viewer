import PageUtil from './page.util';

const ActionTypes = {
  GOTO_PAGE: 'REDUX_PAGE_VIEWER_GOTO_PAGE',
  INIT: 'REDUX_PAGE_VIEWER_INIT'
};

export default ActionTypes;

export const gotoPage = (page, pageProps = null) => {
  // find page 
  const nextPage = PageUtil.getPage(page);

  return {
    type: ActionTypes.GOTO_PAGE,
    payload: {
      page: nextPage,
      pageProps
    }
  };
};

export const init = (page = null, pageProps = null) => {
  return { 
    type: ActionTypes.INIT, 
    payload: { 
      page: (page) ? PageUtil.getPage(page) : PageUtil.getFirstPage(), 
      pageProps: pageProps || null
    } 
  };
};
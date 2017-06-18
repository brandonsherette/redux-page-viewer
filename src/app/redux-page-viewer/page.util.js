const Direction = {
  BACK: 'back',
  BACKWARD: 'back',
  FORWARD: 'next',
  NEXT: 'next'
};

const PageUtil = {
  combinePages,
  Direction,
  getFirstPage,
  getPage,
  _pages: []
};

export default PageUtil;

/////////////////////

/**
 * Combines configurations that can be used for the entire app.
 * 
 * Example:
 * 
 * PageUtil.combinePages({
 *  welcome: WelcomeComponent
 *  about: AboutComponent
 * });
 * 
 * @method combinePages
 * @param {Object} pages the pages to combine.
 */
function combinePages(pages) {
  if (!pages && !typeof pages === 'object') {
    throw 'Pages needs to be an object map.';
  }

  const formattedPages = {};

  for (let key in pages) {
    formattedPages[key] = {
      id: key,
      slug: sanitizeSlug(key),
      component: configs[key]
    };
  }

  console.debug('formattedPages', formattedPages);

  this._pages = Object.assign({}, this._pages, formattedPages);
  console.debug('pages', this._pages);
};

/**
 * Gets the first page.
 * 
 * @method getFirstPage
 * @return {Object|null} the found first page, otherwise null. 
 */
function getFirstPage() {
  for (let key in this._pages) {
    return Object.assign({}, this._pages[key]);
  }

  return null;
}

/**
 * Gets the configuration of a page with the specified object or id of the configuration.
 * 
 * Example: 
 * 
 * const pageWelcome = PageUtil.getPage('welcome');
 * pageWelcome.component // react component 
 * pageWelcome.id // id used for key and identifying what modal is what
 * pageWelcome.slug // the id in slug form, used for the react key property
 * 
 * @method getPage
 * @param {Object|String} page the page configuration or id of the page to search for. 
 * The is the value you specified in page.config.js from the combinePages was used.
 * @return {Object|null} the page configuration found.
 */
function getPage(page) {
  const checkByObject = (mPage) => { return (page.id === mPage.id); };
  const checkByString = (mPage) => { return (page === mPage.id); };
  const check = (typeof page === 'object') ? checkByObject : checkByString;

  if (!page) {
    throw 'Page missing.';
  }

  const pages = Object.assign({}, this._pages);

  for (let key in pages) {
    if (check(pages[key])) {
      return pages[key];
    }
  }

  return null;
}

function sanitizeSlug(str) {
  return str.toLowerCase().replace(/\s/g, '-');
}
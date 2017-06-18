import { PageUtil } from './redux-page-viewer/index';
import About from './page-about/page-about';
import Home from './page-home/page-home';

const PageConfig = PageUtil.combinePages({
  Home,
  About
});
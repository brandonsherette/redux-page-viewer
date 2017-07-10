# Redux Page Viewer
## Currently In Development
## Description
Allows for transitioning from various app pages without the need of a router.
## Versions
**v0.0.3-rc2**
- Fixed issue with init action without a page specified.

**v0.0.3-rc1**
- Added page props feature which allows the ability to send props to pages.
- Exposed init action and the ability to specify which page and page props to start with.

**v0.0.2-rc1**
- Added npmignore

**v0.0.1**
- Initial Setup

## Actions
- gotoPage(page : String, pageProps : Object|null)
  - Example
    ```javascript
    dispatch(gotoPage('home', {
      greeting: 'Welcome Back, Stranger!'
    }))
    ```
- init({ page : String|null, pageProps : Object|null })
  - Example with first found page as starting page.
    ```javascript
    dispatch(init());
    ```
  - Example sending initial starting page and props.
    ```javascript
    dispatch(init({
      page : 'home',
      pageProps : {
        greeting: 'Welcome Back, Stranger!'
      }
    }));
    ```
## Examples
Check **src/app/** for examples.
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../utilities/store';
import { IntlProvider } from 'react-intl';
import Router from './AppStandalone';

const AppEntry = () => {
  console.log('%c Catalog UI started in standalone mode', 'color: blue');
  localStorage.setItem('catalog_standalone', true);
  return (
    <Provider store={store(true)}>
      <IntlProvider locale="en">
        <Router />
      </IntlProvider>
    </Provider>
  );
};

export default AppEntry;

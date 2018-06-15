import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from '~/components/App';

document.addEventListener('DOMContentLoaded', () => {
  const rootComponent = <App />;
  const targetNode = document.getElementById('root');
  render(rootComponent, targetNode);
});

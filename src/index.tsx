import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/app.tsx';
import { GlobalStyle } from './index.style.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);

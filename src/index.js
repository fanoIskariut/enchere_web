import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './pages/assets/vendors/bootstrap/dist/css/bootstrap.min.css';
import './pages/assets/vendors/font-awesome/css/font-awesome.min.css';
import './pages/assets/vendors/nprogress/nprogress.css';
import './pages/assets/vendors/iCheck/skins/flat/green.css';
import './pages/assets/vendors/datatables.net-bs/css/dataTables.bootstrap.min.css';
import './pages/assets/vendors/datatables.net-buttons-bs/css/buttons.bootstrap.min.css';
import './pages/assets/vendors/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css';
import './pages/assets/vendors/datatables.net-responsive-bs/css/responsive.bootstrap.min.css';
import './pages/assets/vendors/datatables.net-scroller-bs/css/scroller.bootstrap.min.css';
import './pages/assets/build/css/custom.min.css';
import './pages/assets/vendors/animate.css/animate.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

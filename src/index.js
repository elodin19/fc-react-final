import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'
import './styles/login_page_style.css'
import './styles/students_table_style.css'
import './styles/student_details_syle.css'
import './styles/popup_style.css'
import './styles/forgot_pass_page_style.css'

import reportWebVitals from './reportWebVitals';
import AppRouting from './AppRouting';

ReactDOM.render(
  <React.StrictMode>
    <AppRouting />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

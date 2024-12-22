import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GreetingElement from './myGreetingApp';
import GreetingElementwithProp from './Mygreetingprop';
import AppColor from './AppBGcolor';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GreetingElement/>
    <GreetingElementwithProp msg="Hi its Monday"/>
    <GreetingElementwithProp msg="Hi its Tuesday"/>
    <GreetingElementwithProp msg="Hi its Wednesday"/>
    <GreetingElementwithProp msg="Hi its Thursday"/>
    <GreetingElementwithProp msg="Hi its Friday"/>
    <GreetingElementwithProp msg="Hi its Saturday"/>
    <GreetingElementwithProp msg="Hi its Sunday"/>
    <AppColor heading="This is first element" lbl="Name: " color="lightgreen"/>
    <AppColor heading="This is second element" lbl="Name: " color="lightblue"/>

  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

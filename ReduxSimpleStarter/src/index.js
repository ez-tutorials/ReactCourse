import React from "react";
import ReactDOM from "react-dom"

const API_KEY = "AIzaSyDLH58QFAU0flwbXclonIc7gVKU7C_5odk";

// create new component which produces html

// const App = function () {
//   return <div>Hi!</div>
// };

const App = () => {
  return <div>Hi!</div>
};

// show the generated html on the webpage
ReactDOM.render(<App />, document.querySelector('.container'));

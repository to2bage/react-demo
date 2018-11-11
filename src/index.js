import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const divE = React.createElement("div", {}, "你好!世界!!");
ReactDOM.render(divE, document.querySelector("#app"));
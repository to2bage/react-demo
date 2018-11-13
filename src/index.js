import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LifeOne from '@/components/LifeOne.jsx';

// const divE = React.createElement("div", {}, "你好!世界!!");
// ReactDOM.render(divE, document.querySelector("#app"));

ReactDOM.render(<div>
                    <LifeOne msg="longLife"></LifeOne>
                </div>, document.getElementById("app"));
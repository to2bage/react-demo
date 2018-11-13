import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import LifeOne from '@/components/LifeOne.jsx';
import LifeTwo from '@/components/LifeTwo.jsx';

// const divE = React.createElement("div", {}, "你好!世界!!");
// ReactDOM.render(divE, document.querySelector("#app"));

ReactDOM.render(<div>
                    <LifeTwo msg="longLife"></LifeTwo>
                </div>, document.getElementById("app"));
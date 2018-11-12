import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from '@/components/Counter.jsx';
import CounterButton from '@/components/CounterButton.jsx';

//#region
// const divE = React.createElement("div", {}, "你好!世界!!");
// ReactDOM.render(divE, document.querySelector("#app"));
//#endregion

//#region
ReactDOM.render(<div>
                    <Counter initCount={0}/>
                    {/*<hr/>*/}
                    {/*<Counter />*/}
                    {/*<hr />*/}
                    {/*<Counter initCount="我就是来捣乱的~~~😈" />*/}
                </div>, document.querySelector("#app"));
//#endregion

//#region
// ReactDOM.render(<div>
//                     <CounterButton color={"red"}>
//                     </CounterButton>
//                 </div>, document.getElementById("app"));
//#endregion
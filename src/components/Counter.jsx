import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            msg: "你好世界",
            count: props.initCount
        };
        this.increatment = this.increatment.bind(this);
    }
    componentWillMount () {
        /*
        console.log("\n\n~~~~~~~~~componentWillMount~~~~~~~~");
        console.log("h3 element:  ", document.querySelector("#myh3"));
        console.log("props.initCount: ", this.props.initCount);
        console.log("state.msg: ", this.state.msg);
        this.myselFunc();
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n");
        */
    }
    componentDidMount () {
        /*
        console.log("\n\n~~~~~~~~~componentDidMount~~~~~~~~");
        console.log("h3 element:  ", document.querySelector("#myh3"));
        console.log("props.initCount: ", this.props.initCount);
        console.log("state.msg: ", this.state.msg);
        this.myselFunc();
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n");
        */
       //#region 原生DOM的事件方式, react不推荐使用
    //    let btn = document.querySelector("#btn");
    //    btn.addEventListener("click", () => {
    //        this.setState((prevState) => {
    //         //    console.log(prevState.count);
    //            let value = prevState.count;
    //            console.log(value);
    //            return {
    //                count: value + 1
    //            }
    //        })
    //    })
       //#endregion
    }
    shouldComponentUpdate(nextPorps, nextState) {
        console.log(this.state.count, nextState.count);
        return true;
        // return this.state.count % 2 == 0 ? true : false;
    }
    // componentWillUpdate () {

    // }
    render () {
        return (
            <div>
                <h1>这是Counter计数器组件</h1>
                <input type="button" value="+1" id="btn" onClick={this.increatment}/>
                <hr/>
                <h3 id="myh3">当前的数量是: {this.state.count}</h3>
            </div>
        )
    }
    myselFunc () {
        return console.log("这是我自己定义的函数, 和生命周期函数无关...");
    }
    increatment () {
        this.setState((prevState) => {
            return {
                count: ++prevState.count
            }
        })
    }
    static defaultProps = {
        initCount: 0
    }
    static propTypes = {
        initCount: PropTypes.number,
    }
}

// Counter.defaultProps = {
//     initCount: 0
// }

export default Counter;
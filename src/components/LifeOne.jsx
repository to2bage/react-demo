import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "state的初始化值"
        };

        this.input = React.createRef();
        this.btn = React.createRef();

        this.changeInput = this.changeInput.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
    }

    static propTypes = {
        msg: PropTypes.string
    }

    static defaultProps = {
        msg: "这是默认的props.msg"
    }

    componentWillMount() {
        console.log("\n\n~~~~~~componentWillMount~~~~~~");
        console.log("this.props.msg: ", this.props.msg);
        console.log("this.state.inputValue: ", this.state.inputValue);
        console.log("~~~~~~end componetWillMount~~~~~~\n\n");
    }

    componentDidMount() {
        console.log("\n\n~~~~~~componentDidMount~~~~~~");
        this.input.current.value = "通过React.createRef()创建的";
        console.log("~~~~~~end componetDidMount~~~~~~\n\n");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("\n\n~~~~~~shouldComponentUpdate~~~~~~");
        console.log("~~~~~~end shouldComponentUpdate~~~~~~\n\n");
        if (this.props.msg !== nextProps.msg) {
            console.log("原来的props.msg: ", this.props.msg);
            console.log("现在的props.msg: ", nextProps.msg);
            return true;
        }
        if (this.state.inputValue !== nextState.inputValue) {
            console.log("原来的state.inputValue: ", this.state.inputValue);
            console.log("现在的state.inputValue: ", nextState.inputValue);
            return true;
        }
        return false;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("\n\n~~~~~~componentWillUpdate~~~~~~");
        console.log("原来的props.msg: ", this.props.msg);
        console.log("现在的props.msg: ", nextProps.msg);
        console.log("原来的state.inputValue: ", this.state.inputValue);
        console.log("现在的state.inputValue: ", nextState.inputValue);
        console.log("~~~~~~end componetWillUpdate~~~~~~\n\n");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("\n\n~~~~~~componentDidUpdate~~~~~~");
        console.log("原来的props.msg: ", prevProps.msg);
        console.log("原来的state.inputValue: ", prevState.inputValue);
        console.log("~~~~~~end componetDidUpdate~~~~~~\n\n");
    }

    render () {
        return (
            <div>
                <h2>这是生命周期函数测试一</h2>
                <hr/>
                <h3>演示props属性的默认值: {this.props.msg}</h3>
                <hr/>
                <button ref={this.btn} onClick={this.changeInput}>改变</button>
                <input ref={this.input} style={{width: "100%"}} value={this.state.inputValue} onChange={this.inputChanged}/>
            </div>
        )
    }

    changeInput () {
        // console.log("btn clicked......")
        // console.log(this.btn.current);
        this.setState((prevState) => {
            return {
                inputValue: prevState.inputValue + "💋🐱👻🎩😈💩"
            }
        })
    }

    inputChanged () {
        this.setState(() => {
            return {
                inputValue: this.input.current.value
            }
        })
    }
}

export default LifeOne;
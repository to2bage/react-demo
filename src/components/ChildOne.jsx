import React, { Component } from "react";
import PropTypes from 'prop-types';

class ChildOne extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static propTypes = {
        msg: PropTypes.string
    }

    static defaultProps = {
        msg: "父组件没有传递哦~~~"
    }

    componentWillReceiveProps(nextProps) {
        console.log("\n\n~~~~~~componentWillReceiveProps~~~~~~");
        console.log("~~~~~~end componetWillReceiveProps~~~~~~\n\n");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("\n\n~~~~~~shouldComponentUpdate~~~~~~");
        console.log("~~~~~~end shouldComponentUpdate~~~~~~\n\n");
        return true;
    }

    render() {
        return (
            <div>
                <h3>这是孩子节点</h3>
                <hr/>
                <h1>父组件传递来的props.msg: {this.props.msg}</h1>
            </div>
        )
    }
}

export default ChildOne;
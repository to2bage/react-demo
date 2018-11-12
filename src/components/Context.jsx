import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class GrantFather extends Component {
    constructor (props) {
        super(props);
        this.state = {
            color: "red"
        };
    }

    render () {
        return (
            <div>
                <h1>这是增祖辈组件</h1>
                <Father></Father>
            </div>
        )
    }

    getChildContext () {
        return {
            color: this.state.color
        }
    }

    static childContextTypes = {
        color: PropTypes.string
    }
}

class Father extends Component {
    render () {
        return (
            <div>
                <h3>这是父辈组件</h3>
                <Child></Child>
            </div>
        )
    }
}

class Child extends Component {
    static contextTypes = {
        color: PropTypes.string
    }

    render () {
        return (
            <div>
                <h5 style={{color: this.context.color}}>这是孙辈组件 --- {this.context.color}</h5>
            </div>
        )
    }
}
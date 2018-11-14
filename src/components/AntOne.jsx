import React, { Component } from 'react';
import { DatePicker } from 'antd';

// import "antd/dist/antd.css";

class AntOne extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <h2>Antd 组件的使用</h2>
                <hr/>
                <DatePicker />
            </div>
        )
    }
}

export default AntOne;
import React, { Component } from "react";
import ChildOne from '@/components/ChildOne.jsx';

class LifeTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "hello child"
        };

        this.childone = React.createRef();

        this.btnClick = this.btnClick.bind(this);
    }

    render() {
        return (
            <div>
                <h3>生命周期函数测试二</h3>
                <ChildOne ref={this.childone} msg={this.state.msg}></ChildOne>
                <button onClick={this.btnClick}>改变父组件传递给子组件的props</button>
            </div>
        )
    }

    btnClick() {
        // console.log(this.childone.current);
        this.setState((prevState) => {
            return {
                msg: "这是新的props哦..."
            }
        })
    }
}

export default LifeTwo;
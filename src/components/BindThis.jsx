import React from "react";

class BindThis extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            msg: "这是默认的文本"
        };
        this.changeMsg2 = this.changeMsg2.bind(this, this.state.msg+"💋", this.state.msg+"🎩");
    }

    render () {
        return (
            <React.Fragment>
                <h1> 绑定This, 并传递参数的几种形式 </h1>
                <input type="button" value="绑定this并传参的方式一" onClick={this.changeMsg1.bind(this, '💩', '😈')}></input>
                <input type="button" value="绑定this并传参的方式二" onClick={this.changeMsg2}></input>
                <input type="button" value="绑定this并传参的方式三" onClick={() => {return this.changeMsg3('👻', '🐱')}}></input>
                <hr/>
                <h3>{this.state.msg}</h3>
            </React.Fragment>
        )
    }

    changeMsg1(arg1, arg2) {
        // console.log(this);
        this.setState(() => {
            return {
                msg: "绑定this并传参的方式一" + arg1 + " " + arg2
            }
        })
    }

    changeMsg2(arg1, arg2) {
        // console.log(this);
        this.setState(() => {
            return {
                msg: "绑定this并传参的方式二" + arg1 + " " + arg2
            }
        })
    }

    changeMsg3 = (arg1, arg2) => {
        // console.log(this);
        this.setState(() => {
            return {
                msg: "绑定this并传参的方式二" + arg1 + " " + arg2
            }
        })
    }
}

export default BindThis;
import React, {PureComponent} from 'react';
import './index.css'

export default class Demo extends PureComponent {

    state={carName:'奔驰c63'}

    changeCar = ()=>{
        this.setState({carName:'雷克萨斯'})
    }

    render() {
        console.log('parent--render')
        const {carName} = this.state
        return (
            <div className="parent">
                <h3>我是parent组件</h3>
                <span>我的车辆是：{carName}</span><br/>
                <button onClick={this.changeCar}>更改车辆</button>
                <Child carName={'奥托'}/>
            </div>
        );
    }
}

class Child extends PureComponent {
    render() {
        console.log('child--render')
        return (
            <div className="child">
                <h3>我是child组件</h3>
                <span>我接受到的parent组件显示车辆是：{this.props.carName}</span>
            </div>


        );
    }
}
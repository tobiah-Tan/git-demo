import React, { Component } from 'react'

export default class Count extends Component {

    //加法
    increment= ()=>{
        const {value} = this.selectNumber
        this.props.increment(value*1)
    }
    //减法
    decrement= ()=>{
        const {value} = this.selectNumber
        this.props.decrement(value*1)
    }
    // 奇数再加
    incrementIfOdd= ()=>{
        const {value} = this.selectNumber
        if(this.props.count % 2 !== 0){
            this.props.increment(value*1)
        }
    }
    // 异步相加
    incrementAsync= ()=>{
        const {value} = this.selectNumber
        this.props.incrementAsync(value*1,1000)
    }

    render() {
        // console.log('ui组件接收：' ,this.props)
        return (
            <div>
                <h2>当前求和为：{this.props.count}</h2>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>incrementIfOdd</button>&nbsp;
                <button onClick={this.incrementAsync}>increment async</button>&nbsp;
            </div>
        )
    }
}

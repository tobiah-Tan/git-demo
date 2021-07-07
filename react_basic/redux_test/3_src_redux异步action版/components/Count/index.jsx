import React, { Component } from 'react'
import store from '../../redux/store'
import {createIncrementAction,createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'

export default class Count extends Component {

    // state= {preCount:0}

    /* componentDidMount(){
        // 监测redux中状态的变化，只要变化，就调用render
        store.subscribe(()=>{
            this.setState({})
        })
    } */
    
    //加法
    increment= ()=>{
        const {value} = this.selectNumber
        // this.setState({preCount:preCount+value*1})//强制类型转换
        store.dispatch(createIncrementAction(value*1))
    }
    //减法
    decrement= ()=>{
        const {value} = this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }
    // 奇数再加
    incrementIfOdd= ()=>{
        const {value} = this.selectNumber
        const preCount = store.getState()
        if(preCount%2 !== 0){
            store.dispatch(createIncrementAction(value*1))
        }
    }
    // 异步相加
    incrementAsync= ()=>{
        const {value} = this.selectNumber
        store.dispatch(createIncrementAsyncAction(value*1,1000))
    }

    render() {
        // const {preCount} = this.state
        return (
            <div>
                <h2>当前求和为：{store.getState()}</h2>
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

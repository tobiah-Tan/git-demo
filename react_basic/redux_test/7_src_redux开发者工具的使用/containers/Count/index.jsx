import React ,{Component} from 'react'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from '../../redux/action/count'

//定义UI组件
class Count extends Component {

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
                <h2>Count组件</h2>
                <h4>当前求和为：{this.props.count} Person组件中的总人数为：{this.props.personSum}</h4>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>incrementIfOdd</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>increment async</button>&nbsp;&nbsp;
            </div>
        )
    }
}

export default connect(
    state => ({count:state.count,personSum:state.persons.length}),//redux现在是一个对象

   //mapDispatch的简写
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction
    }
)(Count)

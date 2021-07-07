import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

export default class App extends Component {

    //状态在哪里，操作状态的方法就在哪里

    //状态
    state = {todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:false},
        {id:'003',name:'敲代码',done:false},
        {id:'004',name:'逛街',done:true}
    ]}
    //添加一个事件todo
    addTodo = (todoObj)=>{
        //获取初始化状态
        const {todos} = this.state
        //追加一个todos
        const newTodo = [todoObj,...todos]
        //更新状态
        this.setState({todos:newTodo})
    }
    //更新todo数组
    updateTodos = (id,done)=>{
        //获取状态中的todos
        const  {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id) return {...todoObj,done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }
    //删除某一条todos
    deleteTodos = (id)=>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        this.setState({todos:newTodos})
    }
    //选择所有的事件选项
    checkedAll = (done)=>{
        //获取原来的todos
        const {todos} = this.state
        //加工数据
        const newTodo = todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        //更新状态
        this.setState({todos:newTodo})
    }
    //清除所有完成的
    clearAllDone = ()=>{
        const {todos} = this.state
        //过滤数据
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos:newTodos})
    }
    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodos={this.updateTodos} deleteTodos={this.deleteTodos}/>
                    <Footer todos={todos} checkedAll={this.checkedAll} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }
}

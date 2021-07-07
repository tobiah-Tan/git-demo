import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state={mouse:false}

    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    //勾选、取消勾选某一个todo的回调
    handleCheck = (id)=>{
        return (event)=>{
            const {checked} = event.target
            this.props.updateTodos(id,checked)
        }
    }

    //删除某一个todo的回调
    handleDelete = (id)=>{
        if(window.confirm('确定删除事项吗？')){
            this.props.deleteTodos(id)
        }
    }

    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=> this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse? 'block':'none' }}>删除</button>
            </li>
        )
    }
}
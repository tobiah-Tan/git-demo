import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createAddPersonAction} from '../../redux/action/person'

class Person extends Component {

    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        this.props.addOnePerson(personObj)
    }

    render() {
        return (
            <div>
                <h2>Person组件</h2>
                <h4>Count组件的求和为：{this.props.sum}</h4>
                <input ref={c=>this.nameNode = c} type="text" placeholder="输入姓名"/>&nbsp;&nbsp;
                <input ref={c=>this.ageNode = c} type="text" placeholder="输入年龄"/>&nbsp;&nbsp;
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.personArr.map((p)=>{
                            return <li key={p.id}>{p.name}---{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state=>({personArr:state.persons,sum:state.count}),//状态
    {
        addOnePerson:createAddPersonAction
    }
)(Person)
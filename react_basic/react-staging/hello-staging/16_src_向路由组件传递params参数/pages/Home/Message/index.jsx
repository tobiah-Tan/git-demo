import React, { Component } from 'react'
import {Link,Route} from "react-router-dom"
import Detail from './Detail'

export default class Message extends Component {
    state={
        messageArr:[
            {id:'01',title:'消息001'},
            {id:'02',title:'消息002'},
            {id:'03',title:'消息003'}
        ]
    }
    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj)=>{
                            return(
                                <li key={msgObj.id}>
                                    {/* 向路由组件中传递params参数 */}
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* 声名接受params参数  */}
                <Route path="/home/message/detail/:id/:title" component={Detail}/>
            </div>
        )
    }
}

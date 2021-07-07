//创建外壳组件
import React from 'react'
import Hello from './Component/Hello/Hello.jsx'
//创建并暴露App组件
export default class App extends React.Component{
    render(){
        return(
            <div>
                <Hello/>
            </div>
        )
    }
}

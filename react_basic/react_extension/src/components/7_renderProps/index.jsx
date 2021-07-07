import React, {Component} from 'react';
import './index.css'

export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>Parent组件</h3>
                <A render={(name)=><B name={name}/>}/>
            </div>
        );
    }
}

class A extends Component {
    state={name:'tom'}
    render() {
        console.log("A:",this.props)
        const {name} = this.state
        return (
            <div className="a">
                <h3>A组件</h3>
                {this.props.render(name)}
            </div>
        );
    }
}

class B extends Component {
    render() {
        console.log("b:",this.props)
        return (
            <div className="b">
                <h3>B组件,接受到的A组件名字为：{this.props.name}</h3>
            </div>
        );
    }
}
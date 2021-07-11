import React, {Component} from 'react';
import Search from './components/Search';
import List from './components/List';

export default class App extends Component {

    state = {//初始化状态
        users:[],//users初始值伪数组
        isFirst:true,
        isLoading:false,
        err:''//存储请求相关的错误信息
    }

    // saveUsers = (users)=>{
    //     this.setState({users})
    // }
    // changeIsFirst = (users)=>{
    //     this.setState({users})
    // }
    // changeIsLoading = (users)=>{
    //     this.setState({users})
    // }
    // saveErr = (users)=>{
    //     this.setState({users})
    // }

    updateAppState=(stateObj)=>{
        this.setState(stateObj)//本身即是一个对象
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        );
    }
}


import React, {Component} from 'react';
import PubSub from 'pubsub-js';
import './index.css'

class List extends Component {

    state = {//初始化状态
        users:[],//users初始值伪数组
        isFirst:true,
        isLoading:false,
        err:''//存储请求相关的错误信息
    }

    //初始化的钩子 ，订阅消息
    componentDidMount(){
        this.token=PubSub.subscribe('atguigu',(_,stateObj)=>{
            this.setState(stateObj)
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users,isFirst,isLoading,err} = this.state
        return (
            <div className="row">
                {
                    //三元运算符
                    isFirst? <h3 style={{color:'lightblue'}}>欢迎使用，请输入关键字进行搜索！</h3>:
                    isLoading? <h2>正在加载中 Loading....</h2>:
                    err? <h2 style={{color:'red'}}>{err}</h2>:
                    users.map((userObj)=>{
                        return(
                            <div key={userObj.id} className="card">
                                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                    <img src={userObj.avatar_url} style={{width:'100px'}} alt='head_portrait'/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default List;
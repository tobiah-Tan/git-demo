
import React, {Component} from 'react';
import './index.css'

class List extends Component {
    render() {
        const {users,isFirst,isLoading,err} = this.props
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
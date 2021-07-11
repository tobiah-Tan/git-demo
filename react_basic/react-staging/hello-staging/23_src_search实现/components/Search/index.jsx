import React, {Component} from 'react';
import axios from 'axios'

class Search extends Component {

    searchHead= ()=>{
        //获取用户的输入
        const {keyWordElement:{value:keyWord}} = this
        //发送请求前通知app更新状态
        this.props.updateAppState({isFirst:false,isLoading:true})
        //发送网络请求
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response =>{
                //请求成功后通知app更新状态
                this.props.updateAppState({isLoading:false,users:response.data.items})
            },
            error =>{
                //请求失败后通知app更新状态
                this.props.updateAppState({isLoading:false,err:error.message})
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={c=> this.keyWordElement = c } type="text" placeholder="输入关键字"/>&nbsp;
                    <button onClick={this.searchHead}>搜索</button>
                </div>
            </section>
        );
    }
}

export default Search;
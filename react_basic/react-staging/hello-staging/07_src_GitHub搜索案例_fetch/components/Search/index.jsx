import React, {Component} from 'react';
import PubSub from 'pubsub-js';
// import axios from 'axios'

class Search extends Component {

    searchHead= async()=>{
        //获取用户的输入
        const {keyWordElement:{value:keyWord}} = this
        //发送请求前通知app更新状态
        PubSub.publish('atguigu',{isFirst:false,isLoading:true})
        //发送网络请求
        //#region 使用axios发送
        /* axios.get(`/api1/search/users2?q=${keyWord}`).then(
            response =>{
                //请求成功后通知List更新状态
                // this.props.updateAppState({isLoading:false,users:response.data.items})
                PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
            },
            error =>{
                //请求失败后通知app更新状态
                // this.props.updateAppState({isLoading:false,err:error.message})
                PubSub.publish('atguigu',{isLoading:false,err:error.message})

            }
        ) */
        //#endregion
            
       /*  //使用fetch发送——关注分离的思想(原则)
        fetch(`/api1/search/users2?q=${keyWord}`).then(
            response =>{console.log('联系服务器成功了');
            return response.json()
        },
        //     error=>{console.log('联系服务器失败了',error);
        //     return new Promise(()=>{})
        // }
        ).then(
            response=>{console.log('获取数据成功了',response)},
            // error =>{
            //     console.log('获取数据失败了',error)
            // }
        ).catch(
            (error)=>{
                console.log(error)
            }
        ) */

        //进一步优化fetch
        try {
            const response = await fetch(`/api1/search/users2?q=${keyWord}`)
            const data = await response.json()
            PubSub.publish('atguigu',{isLoading:false,users:data.items})
        } catch (error) {
            console.log('请求出错',error)
            PubSub.publish('atguigu',{isLoading:false,err:error.message})
        }

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
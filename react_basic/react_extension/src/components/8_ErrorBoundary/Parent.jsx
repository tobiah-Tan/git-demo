import React, {Component} from 'react';
import Child from './Child'

export default class Parent extends Component {

    state={
        hasError:''//用于表示子组件是否产生了错误
    }

    //当Parent的子组件出现报错的时候，会触发getDerivedStateFromError调用，并携带错误信息
    static getDerivedStateFromError(error){
        console.log(error)
        return {hasError:error}
    }


    componentDidCatch() {
        console.log('此处错误统计，反馈给服务器，通知编码人员进行bug修复')
    }

    render() {
        return (
            <div>
                <h2>Parent组件</h2>
                {this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <Child/>}
            </div>
        );
    }
}

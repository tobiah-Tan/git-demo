import React from 'react';
import ReactDOM from 'react-dom'

/*//类式组件
class Demo extends React.Component {

    state={count:0}
    myRefs = React.createRef()

    increment = ()=>{
        this.setState(state=>({count:state.count+1}))
    }

    unmount = ()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    showInput = ()=>{
        alert(this.myRefs.current.value)
    }



    componentDidMount() {this.timer = setInterval(()=>{
        this.setState(state=>({count:state.count + 1}))
    },1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.myRefs}/>
                <h2>当前求和为：{this.state.count}</h2>
                <button onClick={this.increment}>点击+1</button>&nbsp;
                <button onClick={this.unmount}>卸载组件</button>
                <button onClick={this.showInput}>显示输出内容</button>
            </div>
        );
    }
}*/

//函数式组件
//函数时组件没有this
function Demo(){
    //demo函数被调用 1+n次
    //底层做了缓存处理，保证count持续在更新
    const [count,setCount] = React.useState(0)
    const myRefs = React.useRef()

    React.useEffect(()=>{
        let timer = setInterval(()=>{
            setCount(count=>count+1)
        },1000)
        return (()=>{
            clearInterval(timer)
        })
    },[])

    function increment(){
        // setCount(count+1)
        setCount(count=> count+1)

    }
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    function showInput(){
        alert(myRefs.current.value)
    }


    return(
        <div>
            <input type="text" ref={myRefs}/>
            <h2>当前求和为：{count}</h2>
            <button onClick={increment}>点击+1</button>&nbsp;
            <button onClick={unmount}>卸载组件</button>
            <button onClick={showInput}>显示输入数据</button>
        </div>
    )
}

export default Demo
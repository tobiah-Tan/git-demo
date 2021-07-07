//引入Count的UI组件
import CountUI from '../../components/Count'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from '../../redux/count_action'

//mapStateToProps函数返回的对象中的key就作为传递给UI组件props的key，value.作为传递给UI组件props的value——状态
//mapStateToProps函数返回的是一个对象
function mapStateToProps(state){
    return {count:state}
}
//mapDispatchToProps函数返回的对象中的key就作为传递给UI组件props的key，value.作为传递给UI组件props的value——操作状态的方法
//mapDispatchToProps返回的是一个对象
function mapDispatchToProps(dispatch){
    return {
        increment: number =>dispatch(createIncrementAction(number)),
        decrement: number =>dispatch(createDecrementAction(number)),
        incrementAsync: (number,time) =>dispatch(createIncrementAsyncAction(number,time)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

/* 
该文件专门用于暴露一个store对象，整个应用只有一个store对象，所以可以采用默认暴露
 */

//引入creteStore ，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware, combineReducers} from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
//引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'
import personReducer from './reducers/person'
import {composeWithDevTools} from 'redux-devtools-extension'

//汇总所有的reducers
const allReducers = combineReducers({
    count:countReducer,
    persons:personReducer
})

// 暴露store
export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))
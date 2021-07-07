/* 
该文件用于汇总所有的reducer，成为一个总的reducer
*/
import {combineReducers} from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './count'
import personReducer from './person'

//汇总所有的reducers
export default combineReducers({
    count:countReducer,
    persons:personReducer
})
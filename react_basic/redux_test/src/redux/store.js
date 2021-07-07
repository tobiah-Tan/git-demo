/* 
该文件专门用于暴露一个store对象，整个应用只有一个store对象，所以可以采用默认暴露
 */

//引入creteStore ，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware} from 'redux'
//引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers'



// 暴露store
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
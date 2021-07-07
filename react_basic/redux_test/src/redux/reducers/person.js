import { ADD_PERSON } from "../constant"

//reducer 初始化状态和加工状态
const initState = [{id:'001',name:'tom',age:18}]
export default function personReducer(preState=initState,action){
    const {type,data} = action
    switch(type){
        case ADD_PERSON:
            // preState.unshift(data)//此处一定不要这样写，这样会导致preState被改写，就不符合纯函数规则
            return [data,...preState]
        default:
            return preState
    }
}

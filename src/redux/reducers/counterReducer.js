import { Decrement, Increment } from "../actions/types"

const counterReducer=(state={count:0},action)=>{
    switch (action.type) {
      case Increment:
        return {...state,count:state.count+1}
        case Decrement:
          return {...state,count:state.count-1}
      default:
        return state
    }
  }

export default counterReducer
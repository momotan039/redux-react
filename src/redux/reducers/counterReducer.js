import { Decrement, FETCH_COUTNER, Increment } from "../actions/types"

const counterReducer=(state={count:0},action)=>{
    switch (action.type) {
      case Increment:
        return {...state,count:state.count+1}
        case Decrement:
          return {...state,count:state.count-1}
         case FETCH_COUTNER:
            return {...state,count:99}
      default:
        return state
    }
  }

export default counterReducer
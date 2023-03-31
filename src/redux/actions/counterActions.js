import { Decrement, FETCH_COUTNER, Increment } from "./types";

export const incrementAction = { type: Increment };
export const decrementAction = { type: Decrement };
export const fetchCounterAction = async(dispatch,button) => {
    button.disabled=true
    await new Promise(res=>{
        setTimeout(() => {
            res()
        }, 3000);
    })
    button.disabled=false
 return dispatch({ type: FETCH_COUTNER });
};

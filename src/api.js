import axios from 'axios'
import { loginUser, setErorr, setLoading } from './redux/userSlice'

const login=async(user,dispatch)=>{
    dispatch(setLoading(true))
    try {
        const res=await axios.post('http://localhost:5000/login',user)
        alert(res.data.message)
        dispatch(loginUser(res.data.user))
    } catch (error) {
        dispatch(setErorr(error.response.data))  
    }
    dispatch(setLoading(false))
}


export {login}

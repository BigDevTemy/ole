import { CONTACT_LOADING,CONTACT_SUCCESS, CONTACT_ERROR} from "../../constants/actionTypes"
import axios from '../../helpers/axios'
export default  (item)=> (dispatch)=>{
    
    dispatch({
        type:CONTACT_LOADING,
        payload:true,
    })
    console.log('item',item)
    axios.post('/contact',JSON.stringify({
        data:item
    }))
    .then(res=>{

        dispatch({
            type:CONTACT_SUCCESS,
            payload:res.data
        
        })
        console.log(res.data)
        
    })
    .catch(err=>{
        dispatch({
            type:CONTACT_ERROR,
            payload: err.response ? err.response.data :'NO CONNECTION'
        })
        console.log(err)
    })

}
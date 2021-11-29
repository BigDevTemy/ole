import { QUOTE_ERROR,QUOTE_SUCCESS,QUOTE_LOADING} from "../../constants/actionTypes"
import axios from '../../helpers/axios'
export default (item)=> async (dispatch)=>{
    
    dispatch({
        type:QUOTE_LOADING,
        payload:true,
    })
    console.log('item',item)
    await axios.post('/quote',JSON.stringify({
        data:item
    }))
    .then(res=>{

        dispatch({
            type:QUOTE_SUCCESS,
            payload:res.data
        
        })
        
        
    })
    .catch(err=>{
        dispatch({
            type:QUOTE_ERROR,
            payload: err.response ? err.response.data :'NO CONNECTION'
        })
        console.log(err)
    })

}
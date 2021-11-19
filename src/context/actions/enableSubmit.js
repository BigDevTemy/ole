import {ENABLE_SUBMIT} from "../../constants/actionTypes"

export default  ()=> (dispatch)=>{
    dispatch({
        type:ENABLE_SUBMIT,
        payload:false,
    })

    
}
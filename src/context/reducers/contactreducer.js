import { CONTACT_ERROR,CONTACT_LOADING,CONTACT_SUCCESS,ENABLE_SUBMIT } from "../../constants/actionTypes";
import React from "react";
const contactreducer =(state,{payload,type})=>{
    switch(type){

        case ENABLE_SUBMIT:
            return{
                ...state,
                contact:{
                    ...state.contact,
                    submit_disable:payload
                }
            }
        case CONTACT_LOADING:
            return{
                ...state,
                contact:{
                    ...state.contact,
                    loading:payload
                }
            }
        case CONTACT_SUCCESS:{
            return{
                ...state,
                contact:{
                    ...state.contact,
                    data:payload,
                    error:null,
                    loading:false
                }
            }
        }
        case CONTACT_ERROR:
            return{
                ...state,
                contact:{
                    ...state.contact,
                    data:null,
                    error:payload,
                    loading:false
                }
            }
       

        default:
            return state;
    }
}

export default contactreducer;
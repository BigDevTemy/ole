import { QUOTE_ERROR,QUOTE_LOADING,QUOTE_SUCCESS } from "../../constants/actionTypes";
import React from "react";

const quotereducer =(state,{payload,type})=>{
    switch(type){

       
        case QUOTE_LOADING:
            return{
                ...state,
                contact:{
                    ...state.contact,
                    loading:payload,
                    error:null,
                }
            }
        case QUOTE_SUCCESS:{
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
        case QUOTE_ERROR:
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

export default quotereducer;
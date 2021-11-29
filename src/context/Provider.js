import React,{Children,createContext,useReducer} from "react";
import contact from "./initialStates/contact";
import quote from './initialStates/quote'
import contactreducer from "./reducers/contactreducer";
import quotereducer from './reducers/quotereducer'
// import product from '.reducers/products'

export const GlobalContext = createContext({});
export const GlobalProvider = ({ children}) =>{

    const [contactState,contactDispatch]= useReducer(contactreducer,contact);
    const [quoteState,quoteDispatch]= useReducer(quotereducer,quote);
    
    // const [productState,productDispatch]= useReducer(product,productInitialState);

    return <GlobalContext.Provider value={
        {
            contactState,
            contactDispatch,  
            quoteState,
            quoteDispatch,  
        }
    }>
        {children}
    </GlobalContext.Provider>
}
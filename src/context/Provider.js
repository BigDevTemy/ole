import React,{Children,createContext,useReducer} from "react";
import contact from "./initialStates/contact";
import contactreducer from "./reducers/contactreducer";
// import product from '.reducers/products'

export const GlobalContext = createContext({});
export const GlobalProvider = ({ children}) =>{

    const [contactState,contactDispatch]= useReducer(contactreducer,contact);
    
    
    // const [productState,productDispatch]= useReducer(product,productInitialState);

    return <GlobalContext.Provider value={
        {
            contactState,
            contactDispatch,   
        }
    }>
        {children}
    </GlobalContext.Provider>
}
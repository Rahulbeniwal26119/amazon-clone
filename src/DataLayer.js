// we will track basket from here
import React , {createContext , useContext , useReducer} from 'react';

// this is a data layer
export const StateContext  = createContext();

// building a provider
  export const StateProvider = ({reducer , intialState , children})=>(
    <StateContext.Provider value={useReducer(reducer , intialState)}>
            {children}
    </StateContext.Provider>
  )

//accessing state inside a component
 function useStateValue(){
   return useContext(StateContext);
 }
 export default useStateValue;

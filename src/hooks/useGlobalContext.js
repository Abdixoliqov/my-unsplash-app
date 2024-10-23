import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useGlobalContext=()=>{
    const context = useContext(GlobalContext)
    console.log(context, 'context');
    

    if(!context) {
        throw new Error('useGlobalContext() must be in the GlobalContexProvider()')
    }
    return context
}
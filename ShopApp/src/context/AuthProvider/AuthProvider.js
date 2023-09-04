import { Provider } from "react-redux";
import reducers from "./reducers";
import { createStore } from "redux";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [isAuthLoading, setIsAuthLoading] = useState(true);
    useEffect(()=>{
        AsyncStorage.getItem('@USER').then(userSession=>{
            userSession&& setUser(JSON.parse(userSession))
            setIsAuthLoading(false)
        })
    },[])

    const store = createStore(reducers,{user,isAuthLoading})
    return(<Provider store={store}>{children}</Provider>)}
export default AuthProvider;
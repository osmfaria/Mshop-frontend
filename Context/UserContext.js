import {createContext,React,useEffect,useState} from "react"
import { motorsApi } from "../services/api"
import jwt_decode from 'jwt-decode';


 const UserContext = createContext()

export const UserProvider =  ({children}) => {

    const [user,setUser] = useState()

    useEffect(() => {
        const jwtToken = localStorage.getItem("token")  ;
        if (jwtToken !== "undefined") {
            const decode = jwt_decode(jwtToken)
            motorsApi.get(`/users/${decode.id}`,{
                headers: {
                    'Authorization': `Bearer ${jwtToken}`
                 }
            })
            .then((res) => console.log(setUser(res.data)))
            .catch((err) => console.log(err))
          }
    }, [])

    return (
        <>
        <UserContext.Provider value={{user}} >{children}</UserContext.Provider>
        </>
    )
}

export default UserContext
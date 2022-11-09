import {createContext,React,useEffect,useState} from "react"
import { motorsApi } from "../services/api"
import jwt_decode from 'jwt-decode';

 const UserContext = createContext()

export const UserProvider =  ({children}) => {


    const [user,setUser] = useState()
    const [letter,setLetter] = useState()

   useEffect(() => {
    
    const token = localStorage.getItem('token')
    const user_id = localStorage.getItem('user_id')
    
    console.log(user_id,"dadsdsadsa")

    if(user_id !== undefined && user_id !== null){
        motorsApi.get(`users/${user_id}`,{
            headers: {
                'Authorization': `Bearer ${token}`
             }
        }).then((res) => {
            console.log(res.data,"dataaaaaaa")
            const name = res.data.name.match(/\b(\w)/gi);
            const letter1 = name[0]
            const letter2 = name[1]
            setLetter(letter1 + letter2)
            setUser(res.data)})
        .catch((err) => console.log(err))
    }
   },[])

    return (
        <>
        <UserContext.Provider value={{user,letter}} >{children}</UserContext.Provider>
        </>
    )
}

export default UserContext
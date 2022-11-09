import {createContext,React,useState,useEffect} from "react"

 const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState(false)

    useEffect(() => {
      
        const jwtToken = localStorage.getItem("token")
        

        if(jwtToken !== null){
            setAuth(true)
        }
       
        console.log(jwtToken,"token")

})

console.log(auth,"aut")

    return (
        <>
        <AuthContext.Provider value={{auth,setAuth}} >{children}</AuthContext.Provider>
        </>
    )
}

export default AuthContext
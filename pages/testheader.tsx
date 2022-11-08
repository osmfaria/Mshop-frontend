import { useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import jwt_decode from 'jwt-decode';

const testheader = () => {
    const { setToken,setDecode } = useContext(UserContext)

  
    return (
        <><h1>olá mundo</h1></>
    )
}

export default testheader

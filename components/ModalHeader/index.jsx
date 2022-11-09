import Link from "next/link"
import {Lista} from "./styles"
import {useRouter} from "next/router"
import { useContext } from "react"
import AuthContext from "../../Context/AuthContext"

export const ModalHeader = () => {


    const {setAuth} = useContext(AuthContext)
    const navigate = useRouter()

    const exit = () => {
        localStorage.clear()
        setAuth(false)
        return navigate.push("/login")
    }

    return (

     <>
     <Lista>
     <li>
         <Link legacyBehavior href="/editarPerfil">Editar Perfil</Link>
     </li>
     <li>
     <Link legacyBehavior href="/editarEndereço">Editar Endereço</Link>
     </li>
     <li>
         <Link legacyBehavior href="/compras">Minhas Compras</Link>
     </li>
     <li>
     <a onClick={() => exit()}>Sair</a>
     </li>
         
    </Lista>
    
    </>


    )
        
}


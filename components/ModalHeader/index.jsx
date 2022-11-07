import Link from "next/link"
import {Lista} from "./styles"

export const ModalHeader = () => {

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
         <Link legacyBehavior href="/sair">Sair</Link>
     </li>
    </Lista>
    
    </>


    )
        
}


import Button from "../Button"
import Link from "next/link"
import {SectionAll,SectionLi,Img,SectionButton,Div} from "./styles"
import { useState } from "react"
import {ModalHeader} from "../ModalHeader"
import  AuthContext  from "../../Context/AuthContext"
import { useContext } from "react"

export const Header = () => {

   

    // const [authenticated,setAuthenticated] = useState(true)
    const [modal,setModal] = useState(false)
    const {auth} = useContext(AuthContext)

    const modalActivate = () => {
        setModal(true)
    }

    return (

        <SectionAll>
            <Img src="/images/logo.png"></Img>
       
        
       <SectionLi>
             

       <ul>
           <li>
               <Link legacyBehavior href="/carros">Carros</Link>
           </li>
           <li>
           <Link legacyBehavior href="/motos">Motos</Link>
           </li>
           <li>
               <Link legacyBehavior href="/leilao">Leilão</Link>
           </li>
          </ul>
          <div></div>
          {auth === false ? <SectionButton><Link legacyBehavior href="/login"><h4>Fazer Login</h4></Link>
          <Link href="/cadastrar"><Button type="outline2" size="md">Cadastrar</Button></Link>
          </SectionButton>
          : 
          <>
          <Div>
            <h2>
                AN
            </h2>
            </Div>
            <h6 onClick={modalActivate}>Adriano Nóbrega</h6>
            {modal === true && <ModalHeader/>}
            
          </>
          }
           
           
       </SectionLi>
        </SectionAll>


    )
        
}

{/*  */}
import Button from "../Button"
import Link from "next/link"
import {SectionAll,SectionLi,Img,SectionButton,Div} from "./styles"
import { useState,useEffect } from "react"
import {ModalHeader} from "../ModalHeader"
import  AuthContext  from "../../Context/AuthContext"
import { useContext } from "react"
import UserContext from "../../Context/UserContext"

export const Header = () => {

    const [modal,setModal] = useState(false)

    const {auth} = useContext(AuthContext)
    const {user} = useContext(UserContext)
    console.log(user)
    const letter = () => {

            if(user !== undefined && user !== null){
                const name = user.name.match(/\b(\w)/gi);
                const letter1 = name[0]
                const letter2 = name[1]
                return letter1 + letter2
            }
          
    
        
    }

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
                {letter()}
            </h2>
            </Div>
            {user !== undefined && user !== null ? <h6 onClick={modalActivate}>{user.name}</h6> : <h6>sem token</h6>}
            
            {modal === true && <ModalHeader/>}
            
          </>
          }
       </SectionLi>
        </SectionAll>


    )
        
}

{/*  */}
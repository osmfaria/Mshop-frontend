import { useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import jwt_decode from 'jwt-decode';
import { Header } from "../components/Header";
import { SectionAll,Div,Section,SectionPage} from "../styles/user";


const testheader = () => {
    const {user,letter} = useContext(UserContext)
    console.log(user)
    return (
        <>
        <Header/>
        <SectionPage>

        
        <SectionAll></SectionAll>
            <Section>
            {user !== undefined && user !== null ? 
                 <>
                 
                 
                 <Div>
                 <h2>{letter}</h2>
                 </Div>
                    
                <div>
                <h6>{user.name}</h6>
                
                <h5>{user.account_type}</h5>
                </div>
                <h4>{user.description}</h4>
                 </>
                 
                 
                 
                 
                 : <h6>sem token</h6>
            }
          
            </Section>
            </SectionPage>
           
        </>
        
    )
}

export default testheader

import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Header } from "../components/Header"
import AuthContext from "../Context/AuthContext"
import { motorsApi } from "../services/api"
import { toast } from 'react-toastify';
import {useRouter} from "next/router"
import Button from "../components/Button"
import Link from "next/link"
import {Input} from "../components/Input"
import { SectionAll } from '../styles/login'

const Login =  () => {

    const schema = yup.object().shape({
        email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
        password: yup.string().required('Senha obrigatória')
    })

    const {register,handleSubmit,formState: {errors}} = useForm({resolver:yupResolver(schema)});
    const {setAuth} = useContext(AuthContext)
    const navigate = useRouter()

    const submit =  (data: any) => {
         motorsApi.post(`login`,data)
        .then((res => {
            const {token} = res.data
            const {email} = data
            localStorage.setItem("token",token)
            localStorage.setItem("email",email)
            setAuth(true)
            toast.success("Login efetuado com sucesso")
            navigate.push("/users")


        }))
        .catch((err => {
            toast.error("Email ou senha invalidos")
           
        }))
    }
    return (
        <>
            <Header />
            <SectionAll>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(submit)}>
                    <h5>Usuario</h5>
                    <Input
                        type="light"
                        size="md"
                        placeholder="Digitar Usuario"
                        name="email"
                        register={register}
                        error={errors.email?.message}
                    ></Input>
                    <h5>Senha</h5>
                    <Input
                        type="light"
                        size="md"
                        placeholder="Digitar Senha"
                        name="password"
                        register={register}
                        error={errors.password?.message}
                    ></Input>
                   
    
                    <Link href="/senha"><h6>Esqueci minha senha</h6></Link>
                    <Button type="brand1" size="bg">Entrar</Button>
                </form>


                <h4>Ainda não possui conta?</h4>
                <Button type="outline2" size="bg">Cadastrar</Button>

            </SectionAll>
        </>

    )
}

export default Login
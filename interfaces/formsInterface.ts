import { FormikProps } from "formik"
import { IPost } from "./postInterface"

export interface InputProps {
  label: string
  name: string
  formik?: FormikProps<IPost>
  [rest: string]: any
}

export interface FormikControlProps {
  control: string
  name: string
  label: string
  [rest: string]: any
}

export interface LoginProps {
  email: string
  password: string
}

export interface RegisterProps {
  name: string
  email: string
  cpf: string
  phone: string
  birthdate: string
  description: string
  address: {
    cep: string
    state: string
    city: string
    address: string
    number: string
    complement: string
  }
  password: string
  confirmPassword: string
  account_type: string
}

export interface ProfileProps {
  name: string
  email: string
  cpf: string
  phone: string
  birthdate: string
  description: string
  address: {
    cep: string
    state: string
    city: string
    address: string
    number: string
    complement: string
  }
  account_type: string
}


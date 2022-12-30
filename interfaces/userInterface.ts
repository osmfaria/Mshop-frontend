export interface User {
  id: string
  name: string
  email: string
  cpf: string
  phone: string
  birthdate: null | string
  description: null | string
  createdAt: string
  updatedAt: string
  isAdmin: boolean
  account_type: string
  Address: {
    id: string
    address: string
    cep: string
    state: string
    city: string
    number: string
    complement: null | string
    createdAt: string
    updatedAt: string
    userId: string
  }
}

export interface UserProfileProp {
  user: User
}

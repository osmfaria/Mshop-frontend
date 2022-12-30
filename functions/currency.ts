export const getCurrency = (price: number): string => {
  return price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}



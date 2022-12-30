export const isEmpty = (obj: any): boolean => {
  return Object.keys(obj).length === 0
}

export const getDirtyValues = (object: any, initialObject: any): any => {
  const { address: initialAddress, ...InitialpartialData } = initialObject
  const { address, ...partialData } = object

  let data = {}

  for (const key in partialData) {
    if (partialData[key] !== InitialpartialData[key]) {
      data = { ...data, [key]: partialData[key] }
    }
  }

  let updatedAddress = {}

  for (const key in address) {
    if (address[key] !== initialAddress[key]) {
      updatedAddress = { ...updatedAddress, [key]: address[key] }
    }
  }
  
  data = { ...data, address: { ...updatedAddress } }
  
  return data
}

const Logar = () => {
  
  const logando = () => {
    fetch('https://motors-ecommerce-api.herokuapp.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: 'odin@mail.com', password: 'teste' }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <button onClick={logando}>logar</button>
    </div>
  )
}

export default Logar

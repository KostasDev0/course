import Footer from './Component/Footer'
import Header from './Component/Header'
import Guitar from './Component/Guitar'
import {db} from './db/DataBase'
import { useState } from 'react'

function App() {

  const [data, setData]= useState(db)
  const [cart, setCart]= useState([])

  function addToCart(item){
    const itemExists = cart.findIndex(guitar => guitar.id === item.id)
    if(itemExists >= 0){
      console.log("Ya existe");
    }
    else{
      console.log("No existe...");
      setCart(prevCart => [...prevCart, item])
    }
  }
  return (
    <>
      <Header/>
        <main className="row">
          <h1 className='text-red-500'>Nuestras colecciones</h1>
            {data.map((guitar) => (
                  <Guitar 
                    key={guitar.id}
                    guitar={guitar}
                    setCart={setCart}
                    addToCart={addToCart}
                  />
            ))}
        </main>
      <Footer/>
    </>
  )
}

export default App

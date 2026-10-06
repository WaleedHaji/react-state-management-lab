import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const availableItems = [
    {
      id: 1,
      name: "Black T shirt",
      price: 5
    },
    {
      id: 2,
      name: "Hanger Set",
      price: 8
    },
    {
      id: 3,
      name: "Thoub",
      price: 12
    },
    {
      id: 4,
      name: "Computer Bag",
      price: 20
    },
    {
      id: 5,
      name: "Couch",
      price: 50
    },
    {
      id: 6,
      name: "Gaming Chair",
      price: 70
    }
  ]

  const [items, setItems] = useState(availableItems)
  const [shoppingCart, setShoppingCart] = useState([])
  const [availableBalance, setavailableBalance] = useState(100)

  function handleCartItem(clickedItem) {
    console.log(clickedItem)

    const filteredItems = items.filter((oneItem)=>{
      return oneItem.name !== clickedItem.name
    })

    if(availableBalance > clickedItem.price){
      console.log(filteredItems)
      setItems(filteredItems)
      setShoppingCart([...shoppingCart, clickedItem])
      setavailableBalance(availableBalance - clickedItem.price)
    }
  }

  function handleBalance(){
    if (clickedItem){
    setavailableBalance(availableBalance - clickedItem.price)
    }
    console.log(setavailableBalance)
  }

  return (
    <>
      <h1>React State Management Lab</h1>

      <h1>Sayed Hameds Closet</h1>

      <h2>Your Balance: {availableBalance}</h2>

      <h2>Available Items</h2>
        {items.map((oneItem)=>
        <div key={oneItem.name}>
          <p>Name: {oneItem.name} / Price: {oneItem.price}</p>
          <button onClick={()=>{handleCartItem(oneItem)}}>Add to cart</button>
        </div>
      )}

      <h2>Shopping Cart</h2>
        {shoppingCart.length === 0 ? 'Shopping cart is empty' : 
        shoppingCart.map((oneItem)=> 
          <div key={oneItem.name}>
            <p>Name: {oneItem.name} / Price: {oneItem.price}</p>
            <button>Remove item</button>
          </div>
        )}

    </>
  )
}

export default App

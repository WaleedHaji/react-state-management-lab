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
  const [warningMessage, setWarningMessage] = useState('')

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
    else if (availableBalance < clickedItem.price) {
      setWarningMessage('Insufficient funds. Your balance is too low to purchase this item')
      setTimeout(() => {
        setWarningMessage('')
      }, 4000);
    }
  }

  function handleRemoveFromShoppingCart(clickedCartItem){
    console.log(clickedCartItem)

    const filteredCartItems = shoppingCart.filter((oneCartItem)=>{
      return oneCartItem.name !== clickedCartItem.name
    })

    console.log(filteredCartItems)
      setShoppingCart(filteredCartItems)
      setItems([...items, clickedCartItem])
      setavailableBalance(availableBalance + clickedCartItem.price)

  }


  return (
    <>
      <h1>React State Management Lab</h1>

      <h1>Sayed Hameds Closet</h1>

      <h2>Your Balance: {availableBalance}</h2>
        <p>{warningMessage}</p>
      
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
            <button onClick={()=>{handleRemoveFromShoppingCart(oneItem)}}>Remove item</button>
          </div>
        )}

    </>
  )
}

export default App

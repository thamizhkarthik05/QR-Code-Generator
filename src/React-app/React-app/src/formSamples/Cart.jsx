import { useState } from "react"


export const Cart = () => {

    const [cartCount,setCartCount] = useState(0); 
    const incHandleCount = () => setCartCount(cartCount  +1);
    const decHandleCount = () => {
        if(cartCount > 0)
            {
                setCartCount(cartCount - 1);
            }
    }

    const buttonStyle = {
        color: 'white',
        padding: '10px',
        borderRadius: '8px',
        border : 'none',
        backgroundColor : 'black',
        marginLeft : '10px'   
    };

    return (
    <>
        <h1>Number of items in the cart : {cartCount}</h1>
        <button onClick={incHandleCount} style={buttonStyle}>Add to Cart </button>
        <button onClick={decHandleCount} style={buttonStyle}>Remove from cart</button>

    </>
  )
}


import Navbar from "../componens/navbar";
import { useCart } from "../context/Cartcontex";
import Card from "../componens/card";


export function Cartlist() {
  const { cart, removeFromCart ,reset} = useCart();
    console.log(cart)
  return (
    <>
      <Navbar />
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              <Card 
                id={product.id} 
                name={product.name} 
                type={product.type} 
                price={product.price} 
                text={"remove from cart"}
                onClick={() => removeFromCart(product.id)}
              />
            </li>
          ))}
        </ul>
      )
      
      }
      <button    className="btn btn-primary mt-auto" onClick={reset}>dumping</button>
    </>
  );
}
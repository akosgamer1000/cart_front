import  { useEffect, useState } from "react";
import Item from "../componens/aru";
import { useCart } from "../context/Cartcontex";
import Navbar from "../componens/navbar";
import Card from "../componens/card";


export default function Prodpage() {
  const [products, setProducts] = useState<Item[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("http://localhost:3000/item");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    
    loadProducts();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Card 
              id={product.id} 
              name={product.name} 
              type={product.type} 
              price={product.price} 
              onClick={() => addToCart(product)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
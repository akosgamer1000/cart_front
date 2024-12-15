import { useEffect, useState } from "react";
import { useCart } from "../context/Cartcontex";
import Navbar from "../componens/navbar";
import Card from "../componens/card";
import Item from "../componens/aru";

export default function Prodpage() {
    const [products, setProducts] = useState<Item[]>([]);
    const [productsfiltered, setProductsfiltered] = useState<Item[]>([]);
    const { addToCart } = useCart();
    const[SearchTerm, setSearchTerm]= useState('')

    useEffect(() => {
        async function loadProducts() {
            try {
                const response = await fetch("http://localhost:3000/item");
                const data = await response.json();
                setProducts(data);
                setProductsfiltered(data)
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        }
        loadProducts();
    }, []);
    const handleSearch=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const term=event.target.value.toLowerCase();
        setSearchTerm(term)
        const filtered = products.filter(
          (product) =>
             product.name.toLowerCase().includes(term) 
            
              
      )
      setProductsfiltered(filtered);
    }


    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <input
       type="text"
       value={SearchTerm}
       onChange={handleSearch}
       ></input>
                <h1 className="text-center mb-4">Our Products</h1>
                <div className="row g-4">
                    {productsfiltered.map((product) => (
                        <div className="col-md-4" key={product.id}>
                            <Card
                                id={product.id}
                                name={product.name}
                                type={product.type}
                                price={product.price}
                                text={"Add to Cart"}
                                onClick={() => addToCart(product)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
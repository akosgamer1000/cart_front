import { useEffect, useState } from "react";
import { useCart } from "../context/Cartcontex";
import Navbar from "../componens/navbar";
import Card from "../componens/card";
import Item from "../componens/aru";

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
            <div className="container mt-5">
                <h1 className="text-center mb-4">Our Products</h1>
                <div className="row g-4">
                    {products.map((product) => (
                        <div className="col-md-4" key={product.id}>
                            <Card
                                id={product.id}
                                name={product.name}
                                type={product.type}
                                price={product.price}
                                onClick={() => addToCart(product)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
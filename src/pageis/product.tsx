import React, { useContext, useEffect, useState } from "react"
import item from "../componens/aru"
import Card from "../componens/card"
import Navbar from "../componens/navbar"
import { context } from "../App"
import { CartContextType } from '../componens/cartin';


export default function Prodpage() {

    const [product, setProduct] = useState<item[]>([])
    const { cart, setCart }: CartContextType = useContext(context);
    useEffect(() => {
        function load() {
            fetch("http://localhost:3000/item").then(response => response.json()).then(data => {
                setProduct(data);
            })
        }
        load()
    }, [])
    const onclick = (e: item) => {


        setCart((prev) => [...prev, e]);
        console.log(cart)
    }
    return <>

        <Navbar></Navbar>
        <h1>termék</h1>
        <ul>
            {
                product.map(product => <li key={product.id}>
                    <Card id={product.id} name={product.name} type={product.type} price={product.price} onClick={() => onclick(product)}></Card>

                </li>


                )
            }
        </ul>



    </>
}
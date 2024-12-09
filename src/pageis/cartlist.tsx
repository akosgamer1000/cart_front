import { useContext } from "react";

import { context } from "../App";
import Navbar from "../componens/navbar";
import product from "./product";
import Card from "../componens/card";

export function Cartlist() {

    const { cart, setCart }: CartContextType = useContext(context);
    console.log(cart);.,
    return <>
        <Navbar></Navbar>
        <h1>termék</h1>
        <ul>
            {
                cart.map(product => <li key={product.id}>
                    <Card id={product.id} name={product.name} type={product.type} price={product.price} ></Card>

                </li>


                )
            }
        </ul>

    </>
}
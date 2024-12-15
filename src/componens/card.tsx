import React from 'react';
import Item from './aru';
import { useUser } from '../context/Usercontext';

interface CardProps extends Item {
    onClick?: () => void;
    text:String
}
function Card(props: CardProps) {
    const { user } = useUser();
    return (

        <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text text-muted">Type: {props.type}</p>
                <p className="card-text fw-bold">Price: ${props.price.toFixed(2)}</p>
                {user ? (
                    <button
                        onClick={props.onClick}
                        className="btn btn-primary mt-auto"
                    >
                        <img
                            src="/cart_icon.svg"
                            alt="Add to cart"
                            className="me-2"
                            width="20"
                        />
                        {props.text}
                    </button>


                ) : (

                    <h1 ></h1>
                )



                }

            </div>
        </div>

    )
}


export default Card;

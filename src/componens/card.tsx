import React from 'react';
import Item from './aru';

interface CardProps extends Item {
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
    name, 
    type, 
    price, 
    onClick 
}) => {
    return (
        <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-muted">Type: {type}</p>
                <p className="card-text fw-bold">Price: ${price.toFixed(2)}</p>
                {onClick && (
                    <button 
                        onClick={onClick} 
                        className="btn btn-primary mt-auto"
                    >
                        <img 
                            src="/cart_icon.svg" 
                            alt="Add to cart" 
                            className="me-2" 
                            width="20"
                        />
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;

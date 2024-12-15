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
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Type: {type}</p>
                <p className="card-text">Price: ${price.toFixed(2)}</p>
                {onClick && (
                    <button 
                        onClick={onClick} 
                        className="btn btn-primary mt-2"
                    >
                        <img 
                            src="/cart_icon.svg" 
                          
                        />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;
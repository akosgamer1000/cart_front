
import item from "./aru";


interface props extends item {
    onClick?: () => void
}



export default function Card(props: props) {


    return <>
        <div className="card" >

            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.type}</p>
                <p className="card-text">{props.price}</p>
                <button onClick={props.onClick}><img src="/public/cart_icon.svg"></img></button>
            </div>
        </div>
    </>
}
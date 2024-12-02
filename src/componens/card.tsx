import item from "./aru";

interface props extends item { }



export default function Card(props: props) {
    return <>
        <div className="card" >

            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.type}</p>
            </div>
        </div>
    </>
}
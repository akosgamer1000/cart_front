import Item from "./aru";

interface props extends Item{
    onClick?: () => void;
    text:string;
}


export function mody({text,onClick}:props){
return (
    <div className="mb-3" >
        <label className="form-label">{text}</label>
        <input
            type={text === "Password" ? "password" : "text"}
            className="form-control"
            placeholder={`Enter ${text.toLowerCase()}`}
            onChange={(e) => onClick && onClick()}
        />
        <button 
            className="btn btn-primary mt-2"
            onClick={onClick}
        >
            {text === "Password" ? "Update Password" : "Update Username"}
        </button>
    </div>
);

}

const Button=(props)=>{
    return <button onClick={props.click} className="btn">{props.title}</button>
}

export default Button;
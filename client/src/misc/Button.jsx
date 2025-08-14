import './Button.css'

function Button({text = "Button"}) {
    return (
        <div className="btnDiv">
        <button className="button">
        {text}
        <div className="hoverEffect">
            <div></div>
        </div>
        </button>
        </div>
    )
}

export default Button
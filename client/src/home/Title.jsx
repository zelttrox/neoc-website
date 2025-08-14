import './Title.css'

function Title({ text = "Title" }) {
    return (
        <p class="title"> {text} </p>
    )
}

export default Title
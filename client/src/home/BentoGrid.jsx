import './BentoGrid.css'

function BentoGrid() {
    return (
        <div className="grid">
            <div className="item item-0">
                <h3>Powerful engine</h3>
                <p>Completely automatic native cobol generation in less than a second, stays accurate to your code.</p>
                <span className="highlight"> Live demo</span>
            </div>
            <div className="item item-1">
                <h3>Modern language</h3>
                <p>Simplifies cobol writing with a modern language featuring all of cobol features.</p>
                <span className="highlight">Features</span>
            </div>
            <div className="item item-2">
                <h3>Easy to learn</h3>
                <p>Advanced documentation with complete error handling.</p>
                <span className="highlight">Documentation</span>
            </div>   
        </div>
    )
}

export default BentoGrid
import React from 'react'
import ReactDOM from 'react-dom/client'

// Home
import BentoGrid from './home/BentoGrid'
import Title from './home/Title'
// Misc
import Button from './misc/Button'
import Navbar from './misc/Navbar'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
    <Title/>
    <BentoGrid/>
    <br/> <br/>
    <Button text="View features"/>
    </>
)

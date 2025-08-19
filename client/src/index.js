import React from 'react'
import ReactDOM from 'react-dom/client'

// Home
import Title from './home/Title'
import BentoGrid from './home/BentoGrid'
import CodeSnippets from './home/CodeSnippets'
// Misc
import Button from './misc/Button'
import Navbar from './misc/Navbar'
import Docs from './home/Docs'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
    <Navbar/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <Title text="Neoc"/>
    <BentoGrid/>
    <br/> <br/>
    <Button text="View features"/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <Title text="Code snippets"/>
    <CodeSnippets/>
    <br/> <br/>
    <Button text="Try live demo"/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <Title text="Documentation"/>
    <Docs/>
    <br/> <br/>
    <Button text="View docs"/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <br/> <br/>
    <Title text="Why use Neoc?"/>
    </>
)

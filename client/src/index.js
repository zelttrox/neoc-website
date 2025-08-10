import React from 'react'
import ReactDOM from 'react-dom/client'

// Home
import BentoGrid from './home/BentoGrid'
// Misc
import DownloadButton from './misc/DownloadButton'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
    <BentoGrid/>
    <DownloadButton/>
    </>
)

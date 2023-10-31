import { React } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './components'
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
    <div>
        <BrowserRouter>
            <App />
        </BrowserRouter>   
    </div>
)
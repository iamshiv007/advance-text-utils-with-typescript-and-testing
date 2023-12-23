import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "./App.css"
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Tooltip id="my-tooltip" />
    <App />
  </React.StrictMode>,
)

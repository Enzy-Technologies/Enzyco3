import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'

// Import all styles
import './styles/index.css'
import './styles/fonts.css'
import './styles/theme.css'
import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
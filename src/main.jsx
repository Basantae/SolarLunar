// Import React library
import React from 'react'
// Import ReactDOM for rendering
import ReactDOM from 'react-dom/client'
// Import the main App component
import App from './App.jsx'
// Import global styles
import './index.css'

// Render the App component inside the element with id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // Use React.StrictMode for highlighting potential problems
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import App from './components/App/App'
import { store } from './redux/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  {/* <-- Оберните App в BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
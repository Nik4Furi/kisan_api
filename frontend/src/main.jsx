import React from 'react'
import ReactDOM from 'react-dom/client'

import UsersState from './contexts/Users/UsersState'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersState>
      <App />
    </UsersState>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom'
import 'tailwindcss/tailwind.css'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
import App from '@/app/index'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

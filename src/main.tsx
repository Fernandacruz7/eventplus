import { StrictMode } from 'react' //avisa se der algum b.o
import { createRoot } from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js" //importando bootstrap

import "@fontsource/poppins/latin-400.css"
import "@fontsource/poppins/latin-500.css"
import "@fontsource/poppins/latin-600.css"
import "@fontsource/poppins/latin-700.css" //importa a ferramenta e a fonts

import './index.css'
import App from './App.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

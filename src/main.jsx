import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
import './Components/CSS/practice.css';
import { QRCode } from './QRCode.jsx';
import './Qrcode.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <QRCode />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import './User.css'
// import { UserCard } from './UserCard.jsx'
// import { Cart } from './formSamples/Cart'
// import { UserDetails} from './formSamples/UserDetails.jsx'
// import { RegForm } from './formSamples/RegForm.jsx'
// import './formSamples/RegForm.css';
import { AdviceApp } from './formSamples/AdviceApp.jsx';
import './formSamples/AdviceApp.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UserCard /> */}
    {/* <Cart /> */}
    {/* <UserDetails /> */}
    {/* <RegForm /> */}
    <AdviceApp/>
  </StrictMode>,
)

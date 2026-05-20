import { LoginDesing } from "./pages/login/login"
import { RegisterDesing } from "./pages/register/register"
import { DesingChat } from "./pages/chat/chat"

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    {/*RUTAS*/}
    <Routes>
      <Route path="/" element={<LoginDesing/>} />
      <Route path="register" element={<RegisterDesing/>} />
      <Route path="chat" element={<DesingChat/>} />
    </Routes>
    </BrowserRouter>
  )
}
export default App;

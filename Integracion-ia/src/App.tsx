import { LoginDesing } from "./pages/login/login"
import { RegisterDesing } from "./pages/register/register"
import { DesingChat } from "./pages/chat/chat"
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //Rutas 
import { useState, useEffect } from 'react'; 
import { supabase } from "./lib/supabase";
import ProtectedRoute from "./components/ProtectedRoute ";



function App() {

  const [user, setUser] = useState<boolean | null>(null); 
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const checkSession = async() => {
      const { data } = await supabase.auth.getSession()
              if (data.session) {
                  setUser(true)
              } else {
                  setUser(false)
              }
              setLoading(false)
    }
    checkSession()
  },[])
  if (loading) return null

  return (
    <BrowserRouter>
    {/*RUTAS*/}
    <Routes>
    <Route path="/" element={<LoginDesing/>}/>
    <Route path="register" element={<RegisterDesing/>}/>
    <Route element={<ProtectedRoute isAllowed={!!user} />}>
     <Route path="chat" element={<DesingChat/>} />
    </Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App;

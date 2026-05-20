//PAGINA DE LOGIN 
/*type loginDesingProps = { //ESTO SE LO HACE ASI PORQUE ESTOY USANDO TYPESCRIPT Y NO JAVASCRIPT
    text:string
}*/
import { useState } from 'react'
import React from 'react'
import style from './login.module.css'
import { Link } from 'react-router-dom' //IMPORTO EL Link PARA QUE LO TOME
import { supabase } from '../../lib/supabase'; //IMPORTO LA BASA DE DATOS PARA LEER LA LINEA 18
import { useNavigate } from 'react-router-dom';// IMPORTO PARA REEDIRIGIAR AL CHAT


export function LoginDesing(){
    const [email, setEmail] = useState(""); //guarda un valor que puede cambiar. Cuando cambia, React re-renderiza el componente.
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>  {
            e.preventDefault(); //
    
            const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
    
        if (error) {
            console.log("Error:", error.message)
        } else {
            navigate('/chat') //reedirigue a la pagina del chat
        }
    
        }



    return (
       <section className={style.section_login}> 
       <h2 className={style.icono}>▞</h2>
        <h1> Piensa y hazlo mas rapido </h1>
        <div>
        <form className={style.form} onSubmit={handleSubmit}>
            <div>
                <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email" 
                className={style.section_email}></input> 
            </div>
            <div>
               <input 
               type="password" 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="........" 
               className={style.section_password}></input>  
            </div>
            <div>
               <input 
               type="submit" 
               value="Ingresar" 
               className={style.secion_enviar}></input> 
            </div>
            <div>
            <Link 
            to="/register" 
            className={style.secion_registro}>Crear cuenta</Link> {/*EL REACT ROUTER NO HACE FALTA PASAR UN ONECLICK, CON ESTE ESTA BIEN */}
            </div>

          
            </form>
        </div>
         </section> 
    )
}
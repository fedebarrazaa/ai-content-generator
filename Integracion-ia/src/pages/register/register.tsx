import { useState } from 'react'
import React from 'react'
import style from './register.module.css'
import { Link } from 'react-router-dom' //IMPORTO EL Link PARA QUE LO TOMe
import { supabase } from '../../lib/supabase'




export function RegisterDesing(){
    const [email, setEmail] = useState("") //guarda un valor que puede cambiar. Cuando cambia, React re-renderiza el componente.
    const [password, setPassword] = useState("")
    const [text, setText] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>  {
        e.preventDefault(); //

        const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: text
            }
        }
    })

    if (error) {
        console.log("Error:", error.message)
    } else {
        console.log("Usuario creado correctamente")
    }

    }

    return (
        <section className={style.section_login}> 
       <h2 className={style.icono}>▞</h2>
        <h1> Empieza a usar Box IA </h1>
        <div>
        <form className={style.form} onSubmit={handleSubmit}>
            <div>
                <input 
                type="text"
                value={text}
                onChange={(e)=> setText(e.target.value)} //se dispara cada vez que el usuario escribe en un input. Lo usás para actualizar el estado:
                placeholder='Nombre y Apellido'
                className={style.section_email}></input> {/*repito class de email*/}
            </div>
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
               value="Crear cuenta" 
               className={style.secion_enviar}></input> 
            </div>
            <div>
            <Link to="/" className={style.secion_registro}>Volver al login</Link> {/*EL REACT ROUTER NO HACE FALTA PASAR UN ONECLICK, CON ESTE ESTA BIEN */}
            </div>          
            </form>
        </div>
         </section> 
    )
}
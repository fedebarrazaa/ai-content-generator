import style from './chat.module.css'; //importo el css
import { useState } from 'react'; //import useState para poder usarlo en la linea 8
import React from 'react';




export function DesingChat(){
    //SOLO PARA QUE APAREZCA EN PANTALLA, DESPUES BORRAR
    const [messages, setMessages] = useState([
        {role:'user', content:'Hola chat ¿me queres ayudar?'},
        {role:'ia', content:'¡Hola! ¿en que pudo ayudarte?'}
    ]);
    //GUARDAR LOS DATOS DEL INPUT
    const [input, setInput] = useState(''); 

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) =>  {//conceccion de base de datos hasta la linea 29
                e.preventDefault();
                setMessages([...messages, { role: 'user', content: input }]);
                setInput('')//se agregega esta linea para limpiar el input
            }

    return(
        <section 
        className={style.desing_section}>  
        <div 
        className={style.desing_mensaje}> {/*ESTE DIV ES EL AREA DEL MENSAJE, DONDE RESPONDE LA IA Y YO*/}
        <ul> 
           {messages.map((textos, index) => ( //Llamo a text, y despues uso textos.content para mostrar
        <li key={index} className={textos.role === 'user' ? style.mensaje_user : style.mensaje_ia}>
          {textos.content}
        </li>
      ))}
        </ul>

        </div>
        <form 
        onSubmit={handleSubmit}
        className={style.desing_form}> 
        
        <div className={style.desing_form_int}>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text' 
            placeholder='Escribe un mensaje...' 
            className={style.desing_text}></input>

            <button 
            type='submit'
            className={style.desing_button}>↑</button>

        </div>
        </form>
        </section>
    )
}
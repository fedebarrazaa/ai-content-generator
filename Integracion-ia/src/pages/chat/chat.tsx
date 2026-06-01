import style from './chat.module.css'; //importo el css
import { useState } from 'react'; //import useState para poder usarlo en la linea 8
import React from 'react';




export function DesingChat(){
    //SOLO PARA QUE APAREZCA EN PANTALLA, DESPUES BORRAR
    //  const [messages, setMessages] = useState([
    //     {role:'user', content:'Hola chat ¿me queres ayudar?'},
    //    {role:'ia', content:'¡Hola! ¿en que pudo ayudarte?'}
    //]);
    
    const [messages, setMessages] = useState<{role: string, content: string}[]>([])

    //GUARDAR LOS DATOS DEL INPUT
    const [input, setInput] = useState(''); 

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages([...messages, userMessage])
    setInput('')

    const response = await fetch(
        'https://vgsowczrmcknqatvzvtd.supabase.co/functions/v1/chat',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: [...messages, userMessage].map(m => ({
                    role: m.role === 'ia' ? 'assistant' : m.role,
                    content: m.content
                }))
            })
        }
    )

    const data = await response.json()
    setMessages(prev => [...prev, { role: 'ia', content: data.content }])
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
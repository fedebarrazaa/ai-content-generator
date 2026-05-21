import style from './chat.module.css' //importo el css
import { useState } from 'react' //import useState para poder usarlo en la linea 8




export function DesingChat(){
    const [text, setText] = useState([
        {role:'user', content:'Hola chat ¿me queres ayudar?'},
        {role:'ia', content:'¡Hola! ¿en que pudo ayudarte?'}
    ]);
    return(
        <section 
        className={style.desing_section}>  
        <div 
        className={style.desing_mensaje}> {/*ESTE DIV ES EL AREA DEL MENSAJE, DONDE RESPONDE LA IA Y YO*/}
        <ul> 
           {text.map((textos, index) => ( //Llamo a text, y despues uso textos.content para mostrar
        <li key={index} className={textos.role === 'user' ? style.mensaje_user : style.mensaje_ia}>
          {textos.content}
        </li>
      ))}
        </ul>

        </div>
        <form 
        className={style.desing_form}> 
        <div className={style.desing_form_int}>
            <input
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
import style from './chat.module.css' //importo el css




export function DesingChat(){
    return(
        <section 
        className={style.desing_section}> 

        <div 
        className={style.desing_mensaje}> {/*ESTE DIV ES EL AREA DEL MENSAJE, DONDE RESPONDE LA IA Y YO*/}
        </div>

        <form 
        className={style.desing_form}> 
            <input 
            type='text' 
            placeholder='Escribe un mensaje...' 
            className={style.desing_text}></input>
            <button 
            type='submit'
            className={style.desing_button}>↑</button>
        </form>

        </section>
    )
}
import {useRef} from "react";

const style = {
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    input: {
        padding: '5px',
        borderRadius: '5px',
        border: 'none',
        margin: '2px',
        fontSize: '1.2rem',
    },
    button: {
        padding: '7px',
        borderRadius: '5px',
        border: 'none',
        margin: '2px',
        fontSize: '1rem',
        cursor: 'pointer'
    }
}
export const AppInput = ({createMessage}) => {
    const inputRef= useRef()
    const onSubmit = () => {
        if (inputRef.current.value) {
            createMessage(inputRef.current.value)
                .then(() => {
                    inputRef.current.value = ''
                })
            }
    }
    return (
        <div style={style.container}>
            <input placeholder="Mensaje" style={style.input} ref={inputRef}/>
            <button style={style.button} onClick={onSubmit}>Enviar</button>
        </div>
    );
}

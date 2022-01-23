import { useEffect, useRef, useState } from "react";


type TimerArgs = {
    milisegundos: number,
    segundos?: number // con ?:  le indico que esta propiedad será opcional
}

export const Timer = ({ milisegundos }: TimerArgs) => {

    const [segundos, setSegundos] = useState(0);
    const ref = useRef<NodeJS.Timeout>(); // NodeJS.Timer es el tipo de datos que retorna la funcion setInterval, es global por eso no hago una impotacion

    // console.log('Mili ', milisegundos);

    useEffect(() => {
        ref.current && clearInterval(ref.current);

        ref.current = setInterval(() => setSegundos(s => s + 1), milisegundos);
        return () => {
            console.log("Distruyendo el componente Timer...!");
            clearInterval(parseInt( "" + ref.current ));
        };
    },  [ milisegundos ]);

    

    return (
        <>
            <h4> Timer:  <small> {segundos} </small> </h4>
        </>
    );
};

import { ChangeEvent, useState } from "react";


// export function useForm<T>(initState: T ) -> asi seria usando la definicion con una funcion convencional
/* COn el generico T le estoy indicando que el tipo de dato a manejar será el que defina el usuario cuando vaya a utilizar este hook personalizado, ver ejemplo
   en Formulario.tsx  */
export const useForm = <T extends Object>(initState: T) => { // cuando se usa funcion flecha el generico tiene que extender de algo, un Object o Array o xs
    
    const [formulario, setFormulario] = useState(initState);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormulario({
            ...formulario,
            [name]: value
        });
        

    }

    return {
        formulario,
        handleChange
    }
}
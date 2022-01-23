

import { useReducer } from 'react';

interface IContador {
    contador: number;
}

/* EL initialState JAMAS, JAMAS es modificado */
const initialState: IContador = {
    contador: 0
}

type ActionType = 
      { type: 'incrementear'} 
    | { type: 'decrementear'}
    | { type: 'custom', payload: number }

const contadorReducer = (state: typeof initialState, action: ActionType) => {

    switch (action.type) {
        case 'incrementear':
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'decrementear':
            return {
                ...state,
                contador: state.contador - 1
            }
        case 'custom':
            return {
                ...state,
                contador: action.payload
            }

        default:
            return {
                ...state
            };
    }

};

export const ContadorRed = () => {

    const [constadorState, dispatch] = useReducer(contadorReducer, initialState);

    return (
        <div>
            <h2>Contador: { constadorState.contador  }</h2>
            <button  className="btn btn-outline-primary"
                onClick={ ()=> dispatch({ type: 'decrementear'})}>   
            -1
            </button>
            <button  className="btn btn-outline-primary"
                onClick={ ()=> dispatch({ type:'incrementear'})}>   
            +1
            </button>
            <button  className="btn btn-outline-danger"
                onClick={ ()=> dispatch({ type:'custom', payload: 100})}>   
            +100
            </button>

        </div>
    );
};

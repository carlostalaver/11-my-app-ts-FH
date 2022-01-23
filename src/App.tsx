import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";


function App() {
  return (
    <>
      <h1>Hola mundo desde TS</h1>
      <hr />
      
      <Counter />

      <hr />
      <Usuario />

      <h2>useEffect -useRef</h2>
      <hr />

      <TimerPadre/>

      <h2>useReducer</h2>
      <hr />
      <ContadorRed/>


      <h2>Custom Hooks</h2>
      <hr />
      <Formulario/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      


    </>
  );
}

export default App;

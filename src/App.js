import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frase from "./components/Frase";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";

function App() {
  //creo el state
  const [personaje, setPersonaje] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    //logica a ejecutar
    consultarApi();
  }, []);

  const consultarApi = async () => {
    setCargando(true);
    const respuesta = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const resultado = await respuesta.json();

    console.log(respuesta);
    console.log(resultado[0]);

    setTimeout(() => {
      //guardar el personaje en el state
      setPersonaje(resultado[0]);
      setCargando(false);
    }, 2500);
  };

  //operador ternario (condicion) ? (que pasa si es verdadero) : (que pasa si es falso)
  const mostrarComponente =
    cargando === true ? (
      <Spinner></Spinner>
    ) : (
      <Frase personaje={personaje}></Frase>
    );

  return (
    <section className="container text-center my-5">
      <article className="d-flex flex-column align-items-center">
        <img
          className="w-75"
          src={process.env.PUBLIC_URL + "logoSimpsons.png"}
          alt="logo de los simpsons"
        />
        <h1>Modificamos el codigo</h1>
        <Button
          variant="primary"
          className="my-5"
          onClick={() => consultarApi()}
        >
          Obtener Frase
        </Button>
      </article>
      {mostrarComponente}
    </section>
  );
}

export default App;

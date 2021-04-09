import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Frase from './components/Frase';

function App() {
  return (
    <section className='container text-center my-5'>
      <article className='d-flex flex-column align-items-center'>
      <img className='w-75' src={process.env.PUBLIC_URL+ 'logoSimpsons.png'} alt="logo de los simpsons"/>
      <Button variant="primary" className='my-5'>Obtener Frase</Button>
      </article>
      <Frase>
        
      </Frase>
    </section>
  );
}

export default App;

import './App.css';
import { Footer } from './footer/footer';
import { Header } from './header/header';

export function App() {
  const title = 'Learning React';
  return (
    <div>
      <Header title={title}></Header>
      <p>Hola mundo</p>
      <Footer></Footer>
    </div>
  );
}

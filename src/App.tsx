import { Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import Header from './components/Header/Header';
import Home  from './components/Page/Home/Home';
import Contact from './components/Page/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/Page/About/About';

export function App() {
  return (
    <>
      <Header />
        <Route exact={true} path="/"><Home /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/about"><About /></Route>
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default App;

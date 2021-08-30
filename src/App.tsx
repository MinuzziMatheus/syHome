import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/Page/About/About';
import Contact from './components/Page/Contact/Contact';
import Home  from './components/Page/Home/Home';
import List from './components/Page/List/List';
import HouseDetail from './components/Page/HouseDetail/HouseDetail';

export function App() {
  return (
    <>
      <Header />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/contact"><Contact /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/list"><List /></Route>
          <Route path="/list=:id"><HouseDetail /></Route>
        </Switch>
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default App;

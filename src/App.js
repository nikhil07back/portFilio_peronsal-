
import './App.css';
import Content from './Content/Content';
import Expert from './Exprenience/Expert';
import Footer from './footer/Footer';
import Header from './header/Header';
import Nav from './nav/Nav';
import Port from './Port/Port';
import Services from './Services/Services';
import About from './About/About';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Expert />
      <Services />
      <Port />
      <Content />
      <Footer />
    </>
  );
}

export default App;

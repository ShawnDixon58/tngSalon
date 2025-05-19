import styles from './App.module.scss';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <Services />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import { useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/tg-logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Salon Logo" className={styles.logoImage} />
      </div>
      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
        <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></span>
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.show : ''}`}>
        <ul>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#products" onClick={closeMenu}>Products</a></li>
          <li><a href="#connect" onClick={closeMenu}>Connect</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

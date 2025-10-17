import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/tg-logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Timber & Grace Logo" className={styles.logoImage} />
          <span className={styles.logoText}>Timber & Grace</span>
        </div>
        
        <button 
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} 
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
        
        <nav className={`${styles.nav} ${menuOpen ? styles.show : ''}`}>
          <ul className={styles.navList}>
            <li><a href="#home" onClick={closeMenu} className={styles.navLink}>Home</a></li>
            <li><a href="#services" onClick={closeMenu} className={styles.navLink}>Services</a></li>
            <li><a href="#products" onClick={closeMenu} className={styles.navLink}>Products</a></li>
            <li><a href="#connect" onClick={closeMenu} className={styles.navLink}>About</a></li>
            <li><a href="#contact" onClick={closeMenu} className={styles.navLink}>Contact</a></li>
          </ul>
          <div className={styles.ctaContainer}>
            <a href="tel:+13163081153" className={styles.ctaButton} onClick={closeMenu}>
              Call Now
            </a>
          </div>
        </nav>
      </div>
      
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;

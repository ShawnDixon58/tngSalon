// src/components/Footer/Footer.jsx
import styles from './Footer.module.scss';
import { FaInstagram, FaFacebookF, FaComment } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.column}>
          <h4>Contact</h4>
          <p>123 Main St, Bentonville, AR</p>
          <p>(123) 456-7890</p>
        </div>
        <div className={styles.column}>
          <h4>Navigation</h4>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.column}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://pinterest.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaComment /></a>
          </div>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <p>&copy; {new Date().getFullYear()} Timber & Grace</p>
        <p>Website by NWA Digital Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;

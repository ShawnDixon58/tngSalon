// src/components/Footer/Footer.jsx
import styles from './Footer.module.scss';
import { FaInstagram, FaFacebookF, FaComment } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.column}>
            <h4>Contact</h4>
              Timber & Grace Salon & Suite<br />
              3402 Bella Vista Way<br />
              Bella Vista, AR 72714<br />
              (316) 308-1153
          </div>
          <div className={styles.column}>
            <h4>Navigation</h4>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#connect">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.column}>
            <h4>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com/timber.gracebylayna/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/laynadixonhair" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a 
                href="sms:+13163081153" 
                className={styles.socialLink}
                aria-label="Text Layna"
              >
                <FaComment />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottomRow}>
          <p>&copy; {new Date().getFullYear()} Timber & Grace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

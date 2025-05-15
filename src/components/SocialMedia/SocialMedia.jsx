import styles from './SocialMedia.module.scss';
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <section id="social" className={styles.social}>
      <h2 className={styles.title}>Connect With Us</h2>
      <p className={styles.tagline}>Tag your look with <span>#TimberAndGraceLooks</span></p>
      <div className={styles.icons}>
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://facebook.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://pinterest.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
          <FaPinterestP />
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;

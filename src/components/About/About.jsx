import styles from './About.module.scss';
import video from '../../assets/salonVid.mov'
import wifePhoto from '../../assets/layna.jpg'
import ruby from '../../assets/ruby.jpg'
import { FaInstagram, FaFacebookF, FaComment } from 'react-icons/fa';

const About = () => {
  return (
    <section id="connect" className={styles.about}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.header}>Connect With Us</h2>
        <p className={styles.tagline}>
          Tag your look with <span>#TimberAndGraceLooks</span>
        </p>
      </div>
      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          src={video}
          autoPlay loop muted playsInline
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.personCard}>
          <div className={styles.titlePhotoWrapper}>
            <img
              src={wifePhoto}
              alt="Layna Dixon"
              className={styles.circularPhoto}
            />
            <div className={styles.titleText}>
              <h2 className={styles.title}>Layna Dixon</h2>
              <h3 className={styles.subtitle}>Owner/Stylest</h3>
            </div>
          </div>
          <p className={styles.text}>
            At Timber & Grace, beauty is more than just appearance — it’s a feeling. 
            Our mission is to create a space where modern elegance meets natural grace. 
            With personalized care and elevated services, we’re here to help you feel radiant and confident.
          </p>
          <div className={styles.icons}>
            <a href="https://www.instagram.com/timber.gracebylayna/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/laynadixonhair" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a className={styles.textIcon} href="sms:+13163081153" target="_blank" rel="noopener noreferrer" aria-label="SMS">
              <FaComment />
            </a>
          </div>
        </div>
        <div className={styles.personCard}>
          <div className={styles.titlePhotoWrapper}>
            <img
              src={ruby}
              alt="Ruby"
              className={styles.circularPhoto}
            />
            <div className={styles.titleText}>
              <h2 className={styles.title}>Ruby Guerra</h2>
              <h3 className={styles.subtitle}>Esthetician</h3>
              <a 
                href="https://www.desertdreamsorganics.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.website}
              >
                www.desertdreamsorganics.com
              </a>
            </div>
          </div>
          <p className={styles.text}>
            At Timber & Grace, beauty is more than just appearance — it’s a feeling. 
            Our mission is to create a space where modern elegance meets natural grace. 
            With personalized care and elevated services, we’re here to help you feel radiant and confident.
          </p>
          <div className={styles.icons}>
            <a href="https://www.instagram.com/nuvemskincare/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61554042967707" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a className={styles.textIcon} href="sms:+14798004104" target="_blank" rel="noopener noreferrer" aria-label="SMS">
              <FaComment />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

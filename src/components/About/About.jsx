import styles from './About.module.scss';
import video from '../../assets/salonVid.mov'
import wifePhoto from '../../assets/laynanew.jpg'
import ruby from '../../assets/ruby.jpg'
import lacee from '../../assets/lacee.jpeg'
import { FaInstagram, FaFacebookF, FaComment, FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <section id="connect" className={styles.about}>
      {/* Background video */}
      <div className={styles.videoBackground}>
        <video
          className={styles.backgroundVideo}
          src={video}
          autoPlay 
          loop 
          muted 
          playsInline
        />
        <div className={styles.videoOverlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Meet Our Team</span>
          </div>
          {/* <h2 className={styles.title}>Connect With Us</h2> */}
          <p className={styles.subtitle}>
            Tag your look with <span className={styles.hashtag}>#TimberAndGraceLooks</span>
          </p>
        </div>

        <div className={styles.teamGrid}>
          {/* Owner card - centered on top */}
          <div className={`${styles.teamCard} ${styles.ownerCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.profileSection}>
                <div className={styles.imageWrapper}>
                  <img
                    src={wifePhoto}
                    alt="Layna Dixon"
                    className={styles.profileImage}
                  />
                  {/* <div className={styles.imageFrame}></div> */}
                </div>
                <div className={styles.profileInfo}>
                  <h3 className={styles.name}>Layna Dixon</h3>
                  <p className={styles.role}>Owner & Stylist</p>
                </div>
              </div>
              
              <p className={styles.bio}>
                At Timber & Grace, beauty is more than just appearance — it's a feeling. 
                Our mission is to create a space where modern elegance meets natural grace. 
                With personalized care and elevated services, we're here to help you feel radiant and confident.
              </p>
              
              <div className={styles.socialLinks}>
                <a 
                  href="https://www.instagram.com/timber.gracebylayna/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  aria-label="Follow Layna on Instagram"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://www.facebook.com/laynadixonhair" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  aria-label="Follow Layna on Facebook"
                >
                  <FaFacebookF />
                  <span>Facebook</span>
                </a>
                <a 
                  href="sms:+13163081153" 
                  className={styles.socialLink}
                  aria-label="Text Layna"
                >
                  <FaComment />
                  <span>Text Me</span>
                </a>
              </div>
            </div>
          </div>

          {/* Team members row */}
          <div className={styles.teamRow}>
            <div className={styles.teamCard}>
            <div className={styles.cardContent}>
              <div className={styles.profileSection}>
                <div className={styles.imageWrapper}>
                  <img
                    src={ruby}
                    alt="Ruby Guerra"
                    className={styles.profileImage}
                  />
                  <div className={styles.imageFrame}></div>
                </div>
                <div className={styles.profileInfo}>
                  <h3 className={styles.name}>Ruby Guerra</h3>
                  <p className={styles.role}>Licensed Esthetician</p>
                  <a 
                    href="https://www.desertdreamsorganics.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.website}
                  >
                    Desert Dreams Organics
                    <FaArrowRight />
                  </a>
                </div>
              </div>
              
              <p className={styles.bio}>
                Dedicated to natural beauty and organic skincare, Ruby brings expertise in 
                holistic treatments that nurture both skin and spirit. Experience the perfect 
                blend of science and nature for your most radiant complexion.
              </p>
              
              <div className={styles.socialLinks}>
                <a 
                  href="https://www.instagram.com/nuvemskincare/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  aria-label="Follow Ruby on Instagram"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61554042967707" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  aria-label="Follow Ruby on Facebook"
                >
                  <FaFacebookF />
                  <span>Facebook</span>
                </a>
                <a 
                  href="sms:+14798004104" 
                  className={styles.socialLink}
                  aria-label="Text Ruby"
                >
                  <FaComment />
                  <span>Text Me</span>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.teamCard}>
            <div className={styles.cardContent}>
              <div className={styles.profileSection}>
                <div className={styles.imageWrapper}>
                  <img
                    src={lacee}
                    alt="Lacee Akins"
                    className={styles.profileImage}
                  />
                  <div className={styles.imageFrame}></div>
                </div>
                <div className={styles.profileInfo}>
                  <h3 className={styles.name}>Lacee Akins</h3>
                  <p className={styles.role}>Stylist</p>
                </div>
              </div>
              
              <p className={styles.bio}>
                Passionate about creating beautiful styles that enhance your natural beauty. 
                With a keen eye for detail and the latest trends, Lacee delivers exceptional 
                results that leave you feeling confident and refreshed.
              </p>
              
              <div className={styles.socialLinks}>
                <a 
                  href="https://www.instagram.com/lacee.akins/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  aria-label="Follow Lacee on Instagram"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://www.facebook.com/lacee.sterbach" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                  aria-label="Follow Lacee on Facebook"
                >
                  <FaFacebookF />
                  <span>Facebook</span>
                </a>
                <a 
                  href="sms:+13163081153"
                  className={styles.socialLink}
                  aria-label="Text Lacee"
                >
                  <FaComment />
                  <span>Text Me</span>
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

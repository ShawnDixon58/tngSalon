import styles from './About.module.scss';
import video from '../../assets/salonVid.mov'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          src={video}
          autoPlay loop muted playsInline
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h2 className={styles.title}>Our Story</h2>
        <p className={styles.text}>
          At Timber & Grace, beauty is more than just appearance — it’s a feeling. 
          Our mission is to create a space where modern elegance meets natural grace. 
          With personalized care and elevated services, we’re here to help you feel radiant and confident.
        </p>
      </div>
    </section>
  );
};

export default About;

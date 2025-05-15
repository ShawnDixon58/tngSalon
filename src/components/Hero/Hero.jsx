import styles from './Hero.module.scss';
import heroImg from '../../assets/tg-front.jpg'; // adjust if your path is different

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <a href="#services" className={styles.cta}>Explore Services</a>
          <h1 className={styles.title}>Beauty that feels like you.</h1>
          <p className={styles.tagline}>Discover refined, radiant confidence at Timber & Grace.</p>
        </div>
        <div className={styles.imageWrapper}>
          <img src={heroImg} alt="Salon" className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

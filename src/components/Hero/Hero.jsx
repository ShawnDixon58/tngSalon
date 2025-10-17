import styles from './Hero.module.scss';
import heroImg from '../../assets/tg-front.jpg';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      {/* Hero Background Effects */}
      <div className={styles.heroEffects}>
        {/* Particle System */}
        <div className={styles.particleSystem}>
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className={styles.particle} 
              style={{
                '--delay': `${i * 0.3}s`,
                '--duration': `${4 + (i % 4)}s`,
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--size': `${2 + (i % 3)}px`
              }}
            ></div>
          ))}
        </div>
        
        {/* Light Rays */}
        <div className={styles.lightRays}>
          <div className={styles.lightRay} style={{'--angle': '15deg'}}></div>
          <div className={styles.lightRay} style={{'--angle': '45deg'}}></div>
          <div className={styles.lightRay} style={{'--angle': '75deg'}}></div>
          <div className={styles.lightRay} style={{'--angle': '105deg'}}></div>
        </div>
        
        {/* Morphing Shapes */}
        <div className={styles.morphingShapes}>
          <div className={styles.shape} style={{'--delay': '0s', '--x': '10%', '--y': '20%'}}></div>
          <div className={styles.shape} style={{'--delay': '2s', '--x': '80%', '--y': '60%'}}></div>
          <div className={styles.shape} style={{'--delay': '4s', '--x': '20%', '--y': '80%'}}></div>
          <div className={styles.shape} style={{'--delay': '6s', '--x': '70%', '--y': '15%'}}></div>
        </div>
        
        {/* Floating Orbs */}
        <div className={styles.floatingOrbs}>
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className={styles.orb} 
              style={{
                '--delay': `${i * 1.2}s`,
                '--x': `${10 + (i * 12)}%`,
                '--y': `${20 + (i % 3) * 30}%`,
                '--size': `${40 + (i % 3) * 20}px`
              }}
            ></div>
          ))}
        </div>
        
        {/* Gradient Waves */}
        <div className={styles.gradientWaves}>
          <div className={styles.wave} style={{'--delay': '0s'}}></div>
          <div className={styles.wave} style={{'--delay': '2s'}}></div>
          <div className={styles.wave} style={{'--delay': '4s'}}></div>
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.badge}>
              <span className={styles.badgeText}>Premium Beauty Experience</span>
            </div>
            <h1 className={styles.title}>
              Beauty that feels like{' '}
              <span className={styles.highlight}>you</span>
            </h1>
            <p className={styles.tagline}>
              Discover refined, radiant confidence at Timber & Grace where modern elegance meets natural beauty.
            </p>
            <div className={styles.ctaGroup}>
              <a href="#services" className={styles.primaryCta}>
                Explore Services
              </a>
              <a href="#connect" className={styles.secondaryCta}>
                Meet Our Team
              </a>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.circularShape}>
              <img src={heroImg} alt="Timber & Grace Salon Interior" className={styles.heroImage} />
              <div className={styles.circularOverlay}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

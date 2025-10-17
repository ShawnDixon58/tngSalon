import styles from './Services.module.scss';
import { useEffect, useRef, useState } from 'react';
import { FaCut, FaPaintBrush, FaSpa, FaGem } from 'react-icons/fa';

const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`${styles.services} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Our Services</span>
          </div>
          {/* <h2 className={styles.title}>Elevated Beauty Experiences</h2> */}
          <p className={styles.subtitle}>
            Discover personalized treatments designed to enhance your natural radiance
          </p>
        </div>

      <div className={styles.category}>
        <div className={styles.icon}>
          <FaCut />
        </div>
        <h3>Haircuts</h3>
        <p className={styles.note}>Haircuts include shampoo & blowout</p>
        <ul>
          <li>
            <span>Dry Haircut</span>
            <span>$35</span>
          </li>
          <li>
            <span>Haircut Level I</span>
            <span>$42</span>
          </li>
          <li>
            <span>Haircut Level II</span>
            <span>$45</span>
          </li>
        </ul>
      </div>

      <div className={styles.category}>
        <div className={styles.icon}>
          <FaPaintBrush />
        </div>
        <h3>Color</h3>
        <p className={styles.note}>
          All color services include haircut & blowout
        </p>
        <ul>
          <li>
            <span>Color Retouch</span>
            <span>$90</span>
          </li>
          <li>
            <span>All Over Color Refresh</span>
            <span>$110</span>
          </li>
          <li>
            <span>Partial Foil</span>
            <span>$125</span>
          </li>
          <li>
            <span>Full Foil</span>
            <span>$145</span>
          </li>
          <li>
            <span>Base with Partial HL</span>
            <span>$145</span>
          </li>
          <li>
            <span>Partial Babylights</span>
            <span>$145</span>
          </li>
          <li>
            <span>Full Babylights</span>
            <span>$165</span>
          </li>
          <li>
            <span>Base with Full HL</span>
            <span>$160</span>
          </li>
          <li>
            <span>Partial Balayage</span>
            <span>$160</span>
          </li>
          <li>
            <span>Full Balayage</span>
            <span>$175</span>
          </li>
          <li>
            <span>Toner or Gloss</span>
            <span>$75</span>
          </li>
          <li>
            <span>Platinum Blonde</span>
            <span>$160</span>
          </li>
        </ul>
        </div>
        <div className={styles.category}>
        <div className={styles.icon}>
          <FaGem />
        </div>
        <h3>Other Services</h3>
        <ul>
          <li>
            <span>Blowout and Style</span>
            <span>$35</span>
          </li>
          <li>
            <span>Deep Conditioning Treatment</span>
            <span>$50</span>
          </li>
          </ul>
          </div>
        <p className={styles.note}>Extensions priced at consultation</p>
      </div>
      <div className={styles.category}>
        <div className={styles.icon}>
          <FaSpa />
        </div>
      <h3>Esthetic Services</h3>
<ul>
  <li>Facials</li>
  <li>Dermaplaning</li>
  <li>Face and Body Waxing</li>
  <li>Microneedling</li>
  <li>Chemical Peels</li>
  <li>Brow Lamination</li>
</ul>
<p className={styles.note}>Esthetic Services booking link</p>
<p className={styles.note}><a href="https://nuvemskinstudio.glossgenius.com/services">https://nuvemskinstudio.glossgenius.com/services</a></p>
</div>
    </section>
  );
};

export default Services;

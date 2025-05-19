import styles from './Services.module.scss';
import { useEffect, useRef, useState } from 'react';
import { FaCut, FaPaintBrush, FaSpa } from 'react-icons/fa';

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
      <h2 className={styles.heading}>Services</h2>

      <div className={styles.category}>
        <div className={styles.icon}>
          <FaCut />
        </div>
        <h3>Haircuts</h3>
        <p className={styles.note}>Haircuts include shampoo & blowout</p>
        <ul>
          <li>
            <span>Haircut Level I</span>
            <span>$42</span>
          </li>
          <li>
            <span>Haircut Level II</span>
            <span>$48</span>
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
            <span>$85</span>
          </li>
          <li>
            <span>All Over Color Refresh</span>
            <span>$110</span>
          </li>
          <li>
            <span>Partial Highlights</span>
            <span>$120</span>
          </li>
          <li>
            <span>Full Highlights</span>
            <span>$138</span>
          </li>
          <li>
            <span>Base with Partial HL</span>
            <span>$138</span>
          </li>
          <li>
            <span>Babylights</span>
            <span>$150</span>
          </li>
          <li>
            <span>Base with Full HL</span>
            <span>$150</span>
          </li>
          <li>
            <span>Partial Balayage</span>
            <span>$150</span>
          </li>
          <li>
            <span>Full Balayage</span>
            <span>$160</span>
          </li>
        </ul>
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
  <li>Eyebrow Shaping</li>
</ul>
<p className={styles.note}>Provided by our in-house esthetician, Jessica.</p>
</div>
    </section>
  );
};

export default Services;

import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.text}>
            Timber & Grace Salon & Suite<br />
            3402 Bella Vista Way<br />
            Bella Vista, AR 72714<br />
            (316) 308-1153
          </p>

        </div>
        <div className={styles.map}>
          <iframe
            title="Timber & Grace Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6420.574443560522!2d-94.23003448867824!3d36.42643697224064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c905f61b19c2c3%3A0xf3f20b2cd747c544!2sTimber%20%26%20Grace%20Salon%20%26%20Suite!5e0!3m2!1sen!2sus!4v1747268828849!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

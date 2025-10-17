import styles from './Products.module.scss';
import joico from '../../assets/joico-logo.webp'
import redken from '../../assets/redken.png'
import olaplex from '../../assets/olaplex.png'

const products = [
  {
    name: 'Joico',
    description: 'Dedicated to preserving and enhancing hair integrity through advanced keratin technology and innovative professional care.',
    image: joico,
    website: 'https://www.joico.com/',
  },
  {
    name: 'Redken',
    description: 'A global leader in professional haircare, powered by patented protein technology and trusted by stylists worldwide.',
    image: redken,
    website: 'https://www.redken.com/',
  },
  {
    name: 'Olaplex',
    description: 'Scientifically designed to rebuild broken bonds and strengthen hair from within for healthier, more resilient results.',
    image: olaplex,
    website: 'https://www.olaplex.com/',
  },
];

const Products = () => {
  return (
    <section id="products" className={styles.products}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Premium Products</span>
          </div>
          {/* <h2 className={styles.title}>Professional Hair Care</h2> */}
          <p className={styles.subtitle}>
            Discover our curated collection of professional-grade products for lasting results
          </p>
        </div>
        <div className={styles.grid}>
        {products.map((product, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.name}>
                <a 
                  href={product.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.productLink}
                >
                  {product.name}
                </a>
              </h3>
              <p className={styles.description}>{product.description}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

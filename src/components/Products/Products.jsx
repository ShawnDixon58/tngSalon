import styles from './Products.module.scss';

const products = [
  {
    name: 'Moisture Shampoo',
    description: 'Hydrating shampoo ideal for dry or color-treated hair.',
    image: '/assets/products/moisture-shampoo.jpg',
  },
  {
    name: 'Volume Spray',
    description: 'Adds lift and texture without weighing hair down.',
    image: '/assets/products/volume-spray.jpg',
  },
  {
    name: 'Repair Mask',
    description: 'Deep-conditioning treatment for damaged hair.',
    image: '/assets/products/repair-mask.jpg',
  },
];

const Products = () => {
  return (
    <section id="products" className={styles.products}>
      <h2 className={styles.title}>Salon Products</h2>
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
              <h3 className={styles.name}>{product.name}</h3>
              <p className={styles.description}>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

import styles from "./productCard.module.scss";

function ProductCard({ title, price, image, brand }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={title}></img>
      <div className={styles.card__info}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.price}>${price}</span>
        <div className={styles.block}>
          <p className={styles.brand}>{brand}</p>
          <button className={styles.button}>add to card</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
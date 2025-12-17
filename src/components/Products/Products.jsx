import products from "../../data/products.json";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./products.module.scss"

function Products({ filter, limit }) {
  const NEW_DAYS_LIMIT = 45;
  let filteredProducts = products;

  if (filter === "new") {
    filteredProducts = products.filter((p) => p.isNew);
  } else if (filter === "sale") {
    filteredProducts = products.filter((p) => p.discount > 0);
  } else if (["men", "women", "kids"].includes(filter)) {
    filteredProducts = products.filter((p) => p.category === filter);
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, limit);
  }

  return (
    <div className={styles.productsGrid}>
      {filteredProducts.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Products;

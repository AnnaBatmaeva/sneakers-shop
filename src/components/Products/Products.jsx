import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../../slices/productsSlice';

import { selectNewCollection, selectRecommendedProducts } from "../../selectors/selectFilterBlock";


import Loader from "../States/Loader";
import ErrorMessage from "../States/ErrorMessage";

import ProductCard from "../ProductCard/ProductCard";

import styles from "./products.module.scss"


function Products({ filter, limit, brand, category, excludeId }) {
  const productsState = useSelector(state => state.products);
  const dispatch = useDispatch();

  let filteredProducts = productsState.products || [];

  const recommendedProducts = useSelector(state =>
    selectRecommendedProducts(state, limit, brand, category, excludeId));
  const newProducts = useSelector(state => selectNewCollection(state, limit));

  useEffect(() => {
    if (!productsState.products.length) {
      dispatch(fetchProducts());
    }
  }, []);

  if (productsState.error !== null) return (<ErrorMessage errorText={productsState.error} />);
  if (productsState.state === 'loading') return <Loader />;


  if (filter === 'new') {
    filteredProducts = newProducts
  }

  if (filter === 'recommended') {
    filteredProducts = recommendedProducts
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

import { useSelector, useDispatch } from 'react-redux';

import Products from '../../components/Products/Products'
import styles from "./catalog.module.scss"

function Catalog() {
  const productsCount = useSelector(state => state.products.products.length);
  return (
    <>
      <div className={styles.catalogBlock}>
        <div className='content'>
          <h2>Results: <span className={styles.productsCount}>{productsCount}</span></h2>
          <Products />
        </div>
      </div>
    </>
  )
}

export default Catalog
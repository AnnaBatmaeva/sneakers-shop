import Products from '../../components/Products/Products'
import styles from "./catalog.module.scss"

function Catalog() {

  return (
    <>
      <div className={styles.catalogBlock}>
        <div className='content'>
          <Products />
        </div>
      </div>
    </>
  )
}

export default Catalog
import styles from "./sales.module.scss"

import sneakersTitle from '../../assets/sneakers.png';


function Sales() {

  return (
    <>
      <div className={styles.introBlock}>
        <img className={styles.introBlock__sneakersLeft} src={sneakersTitle} alt="Sneakers left" />
        <h1>Big sale every day</h1>
        <img className={styles.introBlock__sneakersRight} src={sneakersTitle} alt="Sneakers right" />
      </div>
      <div className={styles.salesBlock}>
        <div className="content">
          <div className={styles.grid}>
            <div className={`${styles.grid__item} ${styles.grid__big} ${styles.club}`}>
              <div className={styles.content}>
                <h2 className={styles.title}>10% discount</h2>
                <button className={styles.button}>Registration</button>
                <p className={styles.subtitle}>by joining our club</p>
              </div>
            </div>
            <div className={`${styles.grid__item} ${styles.sport}`}>
              <span>Sport sale</span>
            </div>
            <div className={`${styles.grid__item} ${styles.winter}`}>
              <span>Winter sale</span>
            </div>
            <div className={`${styles.grid__item} ${styles.summer}`}>
              <span>Summer sale</span>
            </div>
            <div className={`${styles.grid__item} ${styles.brand}`}>
              <span>Brand sale</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sales
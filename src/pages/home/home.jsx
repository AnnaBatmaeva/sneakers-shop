import Hero from './hero'
import Products from '../../components/Products/Products'
import styles from './home.module.scss'

function Home() {

  return (
    <>
      <Hero />
      <div className={styles.newColectionBlock}>
        <div className="content">
          <div className={styles.titles}>
            <h2 className={styles.titles__newColection}>New Colection</h2>
            <h2 className={styles.titles__goToNewColection}>Shop New Colection</h2>
          </div>
          <Products filter="new" limit={10} />
        </div>
      </div>
    </>
  )
}

export default Home
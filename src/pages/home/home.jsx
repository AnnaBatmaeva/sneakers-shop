import Hero from './hero'
import Products from '../../components/Products/Products'

import styles from './home.module.scss'

import instagramIcon from '../../assets/icons/socialMedia/Instagram.png';
import twitterIcon from '../../assets/icons/socialMedia/Twitter.png';
import whatsAppIcon from '../../assets/icons/socialMedia/WhatsApp.png';
import facebookIcon from '../../assets/icons/socialMedia/Facebook.png';





function Home() {
      console.log("Рендер карточок:");

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

      <div className={styles.joinClubBlock}>
        <div className="content">
          <div className={styles.joinClubContentBlock}>
            <div className={styles.joinClubContentBlock__titles}>
              <h2>Get a 10% discount</h2>
              <h3>by joining our club</h3>
            </div>
            <div className={styles.joinClubContentBlock__socialMedia}>
              <h2>our official pages</h2>
              <img className={styles.icons} src={instagramIcon} alt="Instagram" />
              <img className={styles.icons} src={twitterIcon} alt="Twitter" />
              <img className={styles.icons} src={whatsAppIcon} alt="WhatsApp" />
              <img className={styles.icons} src={facebookIcon} alt="Facebook" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
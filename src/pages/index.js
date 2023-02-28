import styles from '@/styles/Home.module.css'
import Container from '@/components/Container'
import Card from '@/components/Card'

const Home = () => {
  return (
    <Container>
      <section
        className={styles.sidebar}
      >
        <div className={styles.user}>
          <span class="material-symbols-outlined">
            account_circle
          </span>
        </div>

        <div className={styles.actions}>
          <span class="material-symbols-outlined">
            inventory_2
          </span>
          <span class="material-symbols-outlined">
            pets
          </span>
          <span class="material-symbols-outlined">
            inventory
          </span>
        </div>

        <div className={styles.settings}>
          <span class="material-symbols-outlined">
            settings
          </span>
        </div>

      </section>

      <section
        className={styles.main}
      >
        <div className={styles.search}>
          <input
            placeholder='Busca un producto...'

          />
          <span className="material-symbols-outlined glass">
            search
          </span>
        </div>

        <div className={styles.cards}>
          <Card />
          <Card />
        </div>

      </section>
    </Container>
  )
}

export default Home

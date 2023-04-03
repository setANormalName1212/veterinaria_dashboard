import styles from '../styles/Card.module.css'

const Card = ({ children }) => {
    return (
        <article
            className={styles.card}
        >
            {children}
        </article>
    )
}

export default Card
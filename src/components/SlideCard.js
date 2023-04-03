import styles from '../styles/SlideCard.module.css'

const SlideCard = ({ children, left }) => {
    return (
        <section className={styles.slide}
            style={{
                left: left
            }}
        >
            <div>
                {children}
            </div>
        </section>
    )
}

export default SlideCard
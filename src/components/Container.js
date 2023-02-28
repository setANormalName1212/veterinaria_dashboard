import Head from 'next/head'
import styles from '../styles/Container.module.css'

const Container = ({ children }) => {
    return (
        <div
            className={styles.main}
        >
            <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            </Head>
            {children}
        </div>
    )
}

export default Container
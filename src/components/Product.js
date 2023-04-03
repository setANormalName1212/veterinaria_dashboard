import styles from '@/styles/Product.module.css'
import { useState } from 'react'

const Product = () => {
    const [ left, setLeft ] = useState('-100vw')

    return (
        <article className={styles.product}>
            <section className={styles.card}>
                <button>Añadir un producto</button>
            </section>

            <section className={styles.form}>
                <form>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="Title" />

                    <label htmlFor="price">Precio</label>
                    <input type='number' name='price' id='price' placeholder="precio" />

                    <label htmlFor="stock">Stock</label>
                    <input type='number' name='stock' id='stock' placeholder="stock" />

                    <button>Añadir productos</button>
                </form>
            </section>
        </article>
    )
}

export default Product
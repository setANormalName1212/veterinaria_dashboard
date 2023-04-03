import styles from '@/styles/Home.module.css'
import Container from '@/components/Container'
import Card from '@/components/Card'
import { useState } from 'react'
import { orders } from '../components/DB.js'

const arr = [
  {
    title: "chocolate",
    price: 540
  },
  {
    title: "whiskas",
    price: 240
  },
  {
    title: 'dogchow',
    price: 360
  }
]

const Home = () => {
  const [cardProduct, setCardProduct] = useState('-93vw')
  const [inventory, setInventory] = useState('-93vw')
  const [pets, setPets] = useState('-93vw')
  const [financial, setFinancial] = useState('-93vw')
  const [orderView, setOrderView] = useState('-93vw')
  const [orderData, setOrderData] = useState({})
  const [search, setSearch] = useState('')
  const [height, setHeight] = useState('0vh')
  const [padding, setPadding] = useState('0ch')
  const [productFind, setProductFind] = useState('-93vw')
  const [productInfo, setProductInfo] = useState({})

  const algo = () => {
    if (orderData.items) {
      return (
        <div>
          {orderData.items.map(item => (<h2>{item.title}</h2>))}
        </div>
      )

    } else {
      return;
    }
  }

  const orderReady = (id) => {
    if (!id) {
      return
    } else {
      const result = orders.find(order => order.orderID === id)
      result.status = 'ready'
    }
  }

  const filterOrders = (status) => {
    let result = orders.filter(item => item.status == status)

    return result
  }

  const filterProducts = () => {
    return arr.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
  }

  const [productData, setProductData] = useState({
    title: "",
    price: 0,
    stock: 0,
    alert: '',
    provider: '',
    category: '',
    subcategory: '',
    img: ''
  })

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
          <span class="material-symbols-outlined"
            onClick={() => setInventory('0px')}
          >
            inventory_2
          </span>
          <span className="material-symbols-outlined"
            onClick={() => setPets('0px')}
          >
            pets
          </span>
          <span className="material-symbols-outlined"
            onClick={() => setFinancial('0px')}
          >
            inventory
          </span>
        </div>

        <div className={styles.settings}>
          <span className="material-symbols-outlined">
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
            onChange={e => setSearch(e.target.value)}
            onFocus={() => {
              setHeight('calc(80vh - 1ch)'),
                setPadding('2ch')
            }}
            onBlur={() => {
              setHeight('0vh')
              setPadding('0ch')
            }}
          />
          <span className="material-symbols-outlined glass">
            search
          </span>
        </div>

        <div className={styles.result}
          style={{
            height: height,
            padding: padding
          }}
        >
          {filterProducts().map(item => (
            <div key={item.title}
              onClick={() => {
                setProductFind('0')
                setProductInfo(item)
              }}
            >
              <h3>{item.title}</h3>
              <h3>${item.price}</h3>
            </div>
          ))}
        </div>

        <div className={styles.cards}>
          <Card>
            <div className={styles.product}>
              <article>
                <h3>Cantidad de productos</h3>
                <h3>128</h3>
              </article>
              <article>
                <h3>Productos sin stock</h3>
                <h3>4</h3>
              </article>
              <button
                className={styles.add}
                onClick={() => setCardProduct('0')}
              >
                Añadir nuevo producto
              </button>
              <div
                className={styles.cardProduct}
                style={{
                  left: cardProduct
                }}
              >
                <div>

                  <span class="material-symbols-outlined"
                    onClick={() => setCardProduct('-93vw')}
                  >
                    close
                  </span>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setCardProduct('-93vw')
                    }}
                    className={styles.form}
                  >

                    <div>
                      <label htmlFor='title'>Titulo</label>
                      <input type='text' name='title' id='title'
                        onChange={(e) => setCardProduct(productData.title = e.target.value)}></input>
                    </div>

                    <div>
                      <label htmlFor='price'>Precio</label>
                      <input type='number' name='price' id='price'
                        onChange={(e) => setCardProduct(productData.price = e.target.value)}
                      ></input>
                    </div>

                    <div>
                      <label htmlFor='stock'>Stock</label>
                      <input type='number' name='stock' id='stock'
                        onChange={(e) => setCardProduct(productData.stock = e.target.value)}
                      ></input>
                    </div>

                    <div>
                      <label htmlFor='alert'>Alerta</label>
                      <input type='text' name='alert' id='alert'
                        onChange={(e) => setCardProduct(productData.alert = e.target.value)}
                      />
                    </div>

                    <div>
                      <label htmlFor='supplier'>Proveedor</label>
                      <select name='supplier' id="supplier">
                        <option value='none' selected>- proveedor -</option>
                        <option value="Don Gaspar">Don Gaspar</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor='category'>Categoría</label>
                      <select name='category' id='category'>
                        <option value='none' selected>- categoria -</option>
                        <option value='alimentos'>Alimentos</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor='subcategory'>Subcategoría</label>
                      <select name='subcategory' id='subcategory'>
                        <option value='none' selected>- Subcategoria -</option>
                        <option value='cat'>Para gatos</option>
                        <option value='dog'>Para perros</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor='image'>Imagen</label>
                      <input type='file' name='image' id='image'></input>
                    </div>

                    <button type='submit'>Agregar producto</button>
                  </form>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className={styles.pets}>
              <div>
                <h3>Turnos de hoy:</h3>
                <div>
                  <article></article>
                  <article></article>
                  <article></article>
                  <article></article>
                  <article></article>
                </div>
              </div>
              <div>
                <h3>para mañana:</h3>
                <div>
                  <article></article>
                  <article></article>
                  <article></article>
                  <article></article>
                  <article></article>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className={styles.orders}>
              <div>
                <h3>A preparar:</h3>
                <div className={styles.toPrepare}>
                  {filterOrders('not ready').map(order => (
                    <article
                      onClick={() => {
                        setOrderData(order)
                        setOrderView('0vw')
                      }}
                    >{order.orderID}</article>
                  ))}
                </div>
              </div>
              <div>
                <h3>Listas para entregar:</h3>
                <div className={styles.ready}>
                  {filterOrders('ready').map(order => (
                    <article
                      onClick={() => {
                        setOrderData(order)
                        setOrderView('0vw')
                      }}
                    >{order.orderID}</article>
                  ))}
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className={styles.financial}>
              <div>
                <h3>Ventas hoy:</h3>
                <h3>$ 12.970</h3>
              </div>
              <div>
                <h3>Ventas de esta semana:</h3>
                <h3>$ 84.140</h3>
              </div>
              <div>
                <h3>Ventas de este mes:</h3>
                <h3>$ 287.460</h3>
              </div>
            </div>
          </Card>
        </div>


        <section className={styles.inventory}
          style={{
            left: inventory
          }}
        >
          <div>

            <span class="material-symbols-outlined"
              onClick={() => setInventory('-93vw')}
            >
              close
            </span>

            <section>
              <article>
                <h2>Añadí una nueva categoría</h2>
                <input type='text' name="category" id="category"></input>
                <button>Añadir</button>
              </article>

              <article>
                <h2>Añadí una nueva subcategoría</h2>
                <select name='category' id='category'>
                  <option value='category' selected>- Categoría -</option>
                  <option value='Food'>Alimentos</option>
                  <option value='snacks'>Snacks</option>
                </select>
                <input type='text' name='subcategory' id='subcategory'></input>
                <button>Añadir</button>
              </article>

              <article>
                <h2>Añadi un proveedor</h2>
                <input type='text' name='supplier' id='supplier' />
                <button>Añadir</button>
              </article>
            </section>
          </div>
        </section>


        <section className={styles.cardPet}
          style={{
            left: pets
          }}
          onClick={() => setPets('-93vw')}
        >
          <div>
          </div>
        </section>


        <section className={styles.cardFinancial}
          style={{
            left: financial
          }}
          onClick={() => setFinancial('-93vw')}
        >
          <div></div>
        </section>

        <section className={styles.orderView}
          style={{
          }}
          onClick={() => setOrderView('-93vw')}
        >
          <div>

          </div>
        </section>



        <section className={styles.productFind}
          style={{
            left: productFind
          }}
        >
          <div
            onClick={() => setProductFind('-93vw')}
          >
            <h1>{productInfo.price}</h1>
          </div>
        </section>

        <section className={styles.orderView}
          style={{
            left: orderView
          }}
        >
          <div>
            <span class="material-symbols-outlined"
              onClick={() => setOrderView('-93vw')}
            >
              close
            </span>
            {algo()}

            <button
              onClick={() => orderReady(orderData.orderID)}
            >Lista para retirar</button>
          </div>
        </section>

      </section>
    </Container>
  )
}

export default Home

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../actions/products.action';
import styles from './product.module.css';
function Products() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const {data} = products;
  const {loading} = products
  const {error} = products
  useEffect(() =>{
    dispatch(setProducts())
  }, [dispatch])
// console.log(data)
  
  return (
    <div className={styles.outerContainer} >
      {
        loading && <h1>loading...</h1>
      }
      {
        error && <h1>{error}</h1>
      }
      {
        data.map(product => (
          <div className={styles.container} key={product.id}>
            <div><img src={product.image} alt="" /></div>
             <h1>RS. {product.price}</h1>
             <button>add to cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Products

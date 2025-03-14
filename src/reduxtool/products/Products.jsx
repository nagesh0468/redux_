import React, {  useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProduct,setError,setLoading } from '../counter/products.slice';
import styles from './product.module.css';

function ProductsTool() {
  const  products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const {data , error, loading} = products;

  const fetchData = async() => {
    dispatch(setLoading(true))
    try{
      
       const response = await fetch('https://fakestoreapi.com/products');
       const data = await response.json();
       dispatch(setProduct(data))
       dispatch(setLoading(false))
    }catch(e){
         dispatch(setError(e.message))
         dispatch(setLoading(false))
    }
  }

  useEffect(()=> {
    fetchData()
  }, [dispatch])
 
  return (
     <div className={styles.outerContainer} >
          {
            loading && <h1>loading...</h1>
          }
          {
            error && <h1>{error}</h1>
          }
          {
           data?.length>0 ? (data.map(product => (
              <div className={styles.container} key={product.id}>
                <div><img src={product.image} alt="" /></div>
                 <h1>RS. {product.price}</h1>
                 <button onClick={() => alert(product.id)} >add to cart</button>
              </div>
            ))) : ( !loading && <p>no products are not available</p> )
          }
        </div>
  )
}

export default ProductsTool

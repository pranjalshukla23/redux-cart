import {useState, useEffect} from 'react'
import {add} from '../features/cartSlice'
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../features/productSlice';
import {STATUSES} from '../features/productSlice'

const Product = () =>{


  //useDispatch hook is used to call a thunk function or an action
  const dispatch = useDispatch()

  //useSelector hook is used to access state defined in redux
  //useSelector takes reducer name defined in store as argument
  const {data: products, status} = useSelector((state) => state.product)



  useEffect(() =>{

    //call a thunk function
    dispatch(fetchProducts())

  },[])

  const handleAdd = (product) =>{

    //call a action
    dispatch(add(product))
  }

  if(status === STATUSES.LOADING){
    return <h2>Loading...</h2>
  }

  if(status === STATUSES.ERROR){
    return <h2>Something went wrong</h2>
  }
  return (
      <div className="productsWrapper">
        {products.map(product => (
            <div className="card" key={product.id}>
              <img src={product.image} alt="product" />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button className="btn" onClick={()=> handleAdd(product)}>Add To Cart</button>
            </div>
        ))}
      </div>
  )
}

export default Product
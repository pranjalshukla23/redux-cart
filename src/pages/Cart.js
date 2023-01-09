import {useSelector, useDispatch} from 'react-redux'
//import redux actions
import {remove} from '../features/cartSlice'
const Cart = () =>{

  //useSelector hook is used to access state define in redux
  //useSelector takes reducer name defined in store as argument
  const products = useSelector((state) => state.cart)

  //useDispatch hook is used to call a redux action
  const dispatch = useDispatch()

  const handleRemove = (productId) =>{
    dispatch(remove(productId))
  }
  return (
      <div>
        <h3>Cart</h3>
        <div className="cartWrapper">
          {products.map(product => (
              <div className="cartCard" key={product.id}>
                <img src={product.image} alt="cart"/>
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <button className="btn" onClick={()=> handleRemove(product.id)}>Remove</button>
              </div>
          ))}
        </div>
      </div>
  )
}

export default Cart

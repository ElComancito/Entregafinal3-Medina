import cart from './assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'

const CartWidget = () => {
    const {totalQuantity}= useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
           <p className='contador'> {totalQuantity} </p>
        </Link>
    )
}

export default CartWidget
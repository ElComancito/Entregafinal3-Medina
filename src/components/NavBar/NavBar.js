import CartWidget from "../CartWidget/CartWidget"
import "../../App.css"; 
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/celular`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
                <NavLink to={`/category/Tablet`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
                <NavLink to={`/category/Notebook`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
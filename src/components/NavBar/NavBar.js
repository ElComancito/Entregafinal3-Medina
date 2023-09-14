import CartWidget from "../CartWidget/CartWidget"
import "../../App.css"; 

const NavBar = () => {
    return (
        <nav>
            <h3>Tienda</h3>
            <div>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebooks</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
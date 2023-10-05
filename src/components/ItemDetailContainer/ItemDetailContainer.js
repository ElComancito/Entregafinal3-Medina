import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMocks";
import ItemDetail from '../ImportDetail/ImportDetail'
import Item from "../Item/Item";

const ImportDetaiContainer = () => {
    const[products, setProducts] = useState(null)

    useEffect (()=> {
        getProductById('1')
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';

const Itemlistcontainer = ({greeting}) => {
    const [product, setProduct] = useState ([])
    const [loading, setLoading] =useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db, 'product'),where('category','==',categoryId))
        : collection(db, 'product')

        getDocs(collectionRef)
        .then(response =>{
            const productAdapted = response.docs.map(doc => {
                const data = doc.data()
                return {id:doc.id, ...data}
            })
            setProduct(productAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? <p>Cargando...</p> : <ItemList product = {product}/>}
        </div>
    )
}

export default Itemlistcontainer
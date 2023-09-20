import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import './Home.module.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

const Home = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([]);
    // const [error, setError] = useState([]);

    useEffect(() => {

        const detData = async () => {
            try {
                const response = await fetch('https://650a9dd7dfd73d1fab089a48.mockapi.io/shop')

                if (response.ok === false) {
                    throw new Error('Not found')
                }

                const data = await response.json()
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        }
        detData();

    }, [])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <>
            <h1>Home</h1>
            {products.length > 0 && products.map(product => {
                return (
                    <>
                        <li className='product-item' key={product.id}>
                            {product.title}
                            {product.price}
                            <Button
                                onClick={() => handleAddToCart(product)}
                                size="small"
                                variant="contained">
                                add to cart
                            </Button>
                        </li>
                    </>
                )
            })}
        </>
    )
}

export default Home
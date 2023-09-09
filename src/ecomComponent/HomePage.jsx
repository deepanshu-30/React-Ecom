import React, { useState, useEffect } from 'react'
import BaseGrid from './BaseGrid'
import Base from './Base'
import Heading from './Heading'
import { useDispatch } from 'react-redux'
import { setproduct } from './store/productSlice'



const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("1");
        const fetchproduct = async () => {
            console.log("2");
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json();
            dispatch(setproduct(data))
            setTimeout(() => {
                setIsLoading(false);
            }, 10);


        }
        fetchproduct();
    }, [dispatch])

    return (
        <Base>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <Heading name={'Product'}>
                    <BaseGrid />
                </Heading>
            )}
        </Base >



    )
}

export default HomePage

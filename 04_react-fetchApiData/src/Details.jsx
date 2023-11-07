import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'
const Details = () => {
    const { productId } = useParams();
    const [data, setData] = useState(null)
    const getData = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products/${productId}`);
            const data = await res.json();
            setData(data);
        } catch (error) {
            console.log('something went wrong in fetching data', error)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    if (!data) return <div>Loading...</div>
    return (
        <div className='h-screen w-[80%]'>
            <img src={data.thumbnail} alt={data.title} />
            <h2 className='text-center text-xl'>{data.title}</h2>
            <p>Price: <strong>${data.price}</strong></p>
            <p> Description : {data.description}</p>
            <p> Category : {data.category}</p>
            <p> Brand : {data.brand}</p>
            <p> Rating : {data.rating}</p>
            <p> Stock : {data.stock}</p>
            <p> Discount : {data.discountPercentage}</p>
        </div>
    )
}

export default Details
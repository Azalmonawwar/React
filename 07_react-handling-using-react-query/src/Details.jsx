import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const { productId } = useParams();
    const getData = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products/${productId}`);
            return await res.json();
        } catch (error) {
            console.log('something went wrong in fetching data', error)
        }
    }
    const { isPending, error, data } = useQuery({
        queryKey: ['product'],
        queryFn: getData,
        staleTime: 1000 * 10,
    })


    if (isPending) return <div>Loading...</div>
    if (error) return 'An error has occurred: ' + error.message

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
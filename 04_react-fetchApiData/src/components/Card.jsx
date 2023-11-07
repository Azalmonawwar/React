import { Link } from 'react-router-dom';

const Card = ({ title, image, desc, price, id }) => {
    return (
        // <Link to={`/details/${id}`}//>
        <div className='flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>

            <div className='h-[300px] w-auto overflow-hidden'>

                <img src={image} alt={title} className='h-[100%] w-full' />
            </div>
            <Link to={`/product/${id}`}><h2 className='text-xl font-bold'>{title}</h2></Link>
            <p>Price: <strong>${price}</strong></p>
            <p> Description : {desc}</p>
        </div>
        // </Link>
    )
}

export default Card
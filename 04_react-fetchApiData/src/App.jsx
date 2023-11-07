import Card from './components/Card'
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setData(data.products);
    } catch (error) {
      console.log('something went wrong in fetching data', error)
    }
  }

  useEffect(() => {
    getData();
  }, [])
  if (!data) return <div>Loading...</div>
  return (
    <>
      <div className='h-screen w-[90%] mx-auto'>
        <h1 className='text-center text-4xl font-bold text-black'>Products</h1>

        <div className='grid grid-flow-row md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mb-4  px-4 md:px-0 lg:px-0  sm:grid-cols-2 grid-cols-1 '>
          {
            data.map((item) => (
              <Card key={item.id} title={item.title} id={item.id} desc={item.description} price={item.price} image={item.thumbnail} />
            ))
          }
        </div>

      </div>

    </>
  )
}

export default App

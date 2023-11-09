
import Card from './components/Card';
import { useQuery } from '@tanstack/react-query';
const getData = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products');
    return await res.json();
  } catch (error) {
    console.log('something went wrong in fetching data', error)
  }
}
function App() {

  const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: getData,
    staleTime: 1000 * 10,
  })



  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <div className='h-screen w-[90%] mx-auto'>
        <h1 className='text-center text-4xl font-bold text-black'>Products</h1>

        <div className='grid grid-flow-row md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mb-4  px-4 md:px-0 lg:px-0  sm:grid-cols-2 grid-cols-1 '>
          {
            data.products.map((item) => (
              <Card key={item.id} title={item.title} id={item.id} desc={item.description} price={item.price} image={item.thumbnail} />
            ))
          }
        </div>

      </div>
    </>
  )
}

export default App

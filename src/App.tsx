import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';



function App() {
  const { loading, products, error } = useProducts()

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map(product => <Product product={product} key={product.id} />)}

    </div>
  );

}

export default App;



// return e('div', { className: 'container' }, [
//   e('h1', { className: 'font-bold', key: 1 }, `Test JSX ${count}`),
//   e('button', {
//     className: 'py-2',
//     key: 2,
//     onClick: () => setCount(count + 1)
//   }, 'click me')
// ])
import { ProductForm } from './components/ProductForm';
import { ProductList } from './components/ProductList';
import { ProductSearch } from './components/ProductSearch';
import { ProductValue } from './components/ProductValue';

function App() {
	return (
		<div>
			<ProductForm />
			<ProductList />
			<ProductSearch />
			<ProductValue />
		</div>
	);
}

export default App;

import { ProductForm } from './components/ProductForm';
import { ProductList } from './components/ProductList';
import { ProductSearch } from './components/ProductSearch';
import { ProductValue } from './components/ProductValue';

function App() {
	return (
		<div className="container is-fluid p-5">
			<h2 className="title is-2">세관 신고서</h2>
			<ProductForm />
			<ProductSearch />
			<ProductList />
			<ProductValue />
		</div>
	);
}

export default App;

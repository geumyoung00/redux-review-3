import { createRoot } from 'react-dom/client';
import App from './App';
import 'bulma/css/bulma.css';
import './styles.css';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(<App />);

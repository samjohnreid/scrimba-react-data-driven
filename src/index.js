import { createRoot } from 'react-dom/client';
import "./index.css";
import App from './App.js';

const rootEl = document.querySelector('#root');
const root = createRoot(rootEl);
root.render(<App />);
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import App from './App.tsx';
createRoot(document.getElementById('root')).render(React.createElement(StrictMode, null,
    React.createElement(App, null)));

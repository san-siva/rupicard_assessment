import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);

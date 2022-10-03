import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import AppContent from './containers/app-content/AppContent';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>

);


import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesPage from './routes/RoutesPage';
import { MainLayout } from './components/MainLayout/MainLayout';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <RoutesPage/>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

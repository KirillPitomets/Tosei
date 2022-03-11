import React from 'react';
import ReactDOM from 'react-dom';
// ======= react router dom======
import { BrowserRouter } from 'react-router-dom'
// ======= Styles ======
import './styles/index.scss'
// ======= App ======
import App from './components/App/App';
// ======= Providers ======
import NavigateBurgerProvider from './context/NavigateBurgerProvider';
import SelectionCarDataProvider from './context/SelectionCarDataProvider'
import CarPageDataProvider from './context/CarPageDataProvider'

ReactDOM.render(

  <SelectionCarDataProvider>
    <NavigateBurgerProvider>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </NavigateBurgerProvider>
  </SelectionCarDataProvider>,

  document.getElementById('root')
);

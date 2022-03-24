import { AddProductsPanel, UpdateProductsPanel, AllProductsPanel } from 'components/panels';

import { Routes, Route} from 'react-router-dom'

import {LoginPage, DashBoardPage, PageNotFound} from './pages'

function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<DashBoardPage/>}>
          <Route index element={<AllProductsPanel title="All Products"/>}/>
          <Route path="add" element={<AddProductsPanel title="Add New Product"/>}/>
          <Route path="update" element={<UpdateProductsPanel title="Update Product"/>}/>
        </Route>

        <Route path="*" element={<PageNotFound/>}/>

      </Routes>

      </>
  );
}

export default App;


import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

//Private Route
import PrivateRoute from './components/PrivateRoute.jsx';

//Auth
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx';

import Profile from './pages/User/Profile.jsx';

// Admin Route
import AdminRoute from './pages/Admin/AdminRoute.jsx';
import UserList from './pages/Admin/UserList.jsx';
import CategoryList from './pages/Admin/CategoryList.jsx';
import ProductList from './pages/Admin/ProductList.jsx';
import AllProducts from './pages/Admin/AllProducts.jsx';
import ProductUpdate from './pages/Admin//ProductUpdate.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

      <Route path="" element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile/>} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminRoute />}>
      <Route path='userlist' element={<UserList/>} />
      <Route path='categorylist' element={<CategoryList/>} />
      <Route path='productlist' element={<ProductList/>} />
      <Route path='allproductslist' element={<AllProducts/>} />
      <Route path='product/update/:_id' element={<ProductUpdate/>} />
        

      </Route>

    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  

)

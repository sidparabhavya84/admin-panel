import React, { useEffect } from 'react';
import Header from '../Header/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Admin from '../Admin/Admin';
import Product from '../Product/Product';
import Setting from '../Setting/Setting';
import EditProduct from '../EditProduct/EditProduct';
import AddProduct from '../Product/AddProduct';
import './Maincontent.css'

function Maincontent({handleSidebar,handle={handle}}) {

  const navigate = useNavigate();

  const getLoginDetail = () => {
    let data = JSON.parse(sessionStorage.getItem("LoginData"));

    if (data === null){
      navigate('/login')
    }else{
      navigate('/')
    }
  }

  useEffect(() => {
    getLoginDetail();
  },[])
  return (
    <div className='col m'>
        <Header handleSidebar={handleSidebar} handle={handle}/>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/updateproduct' element={<EditProduct/>}/>

        </Routes>
    </div>
  )
}

export default Maincontent;
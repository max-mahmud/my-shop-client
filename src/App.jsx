import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Card from "./pages/Card";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shipping from "./pages/Shipping";
import { useDispatch } from "react-redux";
import { get_category } from "./store/Reducers/homeReducer";
import CategoryShop from "./pages/CategoryShop";
import SearchProduct from "./pages/SearchProduct";
import Payment from "./pages/Payment";
import ProtechUser from "./utils/ProtechUser";
import Dashboard from "./pages/Dashboard";
import Index from "./components/dashboard/Index";
import Orders from "./components/dashboard/Orders";
import Wishlist from "./components/dashboard/Wishlist";
import ChangePassword from "./components/dashboard/ChangePassword";
import OrderDetails from "./components/dashboard/OrderDetails";
import Chat from "./components/dashboard/Chat";
import ConfirmOrder from "./pages/ConfirmOrder";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_category());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/shops" element={<Shops />} />
      <Route path="/card" element={<Card />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/products?" element={<CategoryShop />} />
      <Route path="/products/search?" element={<SearchProduct />} />
      <Route path="/order/confirm?" element={<ConfirmOrder />} />
      <Route path="/product/details/:slug" element={<Details />} />

      <Route path="/dashboard" element={<ProtechUser />}>
        <Route path="" element={<Dashboard />}>
          <Route path="" element={<Index />} />
          <Route path="order/details/:orderId" element={<OrderDetails />} />
          <Route path="my-orders" element={<Orders />} />
          <Route path="my-wishlist" element={<Wishlist />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="chat" element={<Chat />} />
          <Route path="chat/:sellerId" element={<Chat />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;

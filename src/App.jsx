import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// user routes
import {
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  CheckoutPage,
  PaymentPage,
  OrderSuccessPage,
  ProductDetailsPage,
  ProfilePage,
  SellerActivationPage,
  OrderDetailsPage,
  TrackOrderPage,
  UserInbox,
  AllProducts
} from "./routes/Routes.js";
import ForgotPassword from "./pages/ForgotPassword";
import AdminOrderDetails from "./pages/AdminOrderManage";
import TermsAndConditions from "./pages/Terms";
import Accessories from "./pages/Accessories";


// seller routes

import {
  ShopDashboardPage,
  ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvents,
  ShopAllEvents,
  ShopAllCoupouns,
  ShopPreviewPage,
  ShopAllOrders,
  ShopOrderDetails,
  ShopAllRefunds,
  ShopSettingsPage,
  ShopWithDrawMoneyPage,
  ShopInboxPage,
  ShopUpdateProduct
} from "./routes/ShopRoutes";

// admin routes

import {
  AdminDashboardPage,
  AdminDashboardUsers,
  AdminDashboardSellers,
  AdminDashboardOrders,
  AdminDashboardProducts,
  AdminDashboardEvents,
  AdminDashboardWithdraw
} from "./routes/AdminRoutes";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
import ProtectedRoute from "./routes/ProtectedRoute";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";
import { ShopHomePage } from "./ShopRoutes.js";
import SellerProtectedRoute from "./routes/SellerProtectedRoute";
import { getAllProducts } from "./redux/actions/product";
import { getAllEvents } from "./redux/actions/event";
import axios from "axios";
import { server } from "./server";
import CustomerHomePage from './pages/CustomerHomepage/CustomerHomepage';
import './App.css'
import CatalogPage from './pages/CatalogPage/CatalogPage';
import VillajaHeader from './components/VillajaHeader/VillajaHeader';
import VillajaFooter from './components/VillajaFooter/VillajaFooter';
import {CustomerLogin, CustomerSignUp, SellerLogin, SellerSignUp} from './components';
// import CategoryComponent from './pages/CatalogPage/CategoryComponent';
import ProductReviews from "./pages/ProductReviews";
import SellerHomePage from "./pages/SellerHomePage/SellerHomePage";
import CartPage from "./pages/CartPage/CartPage";
import AdminRefundPage from "./pages/AdminRefundPage.jsx";
import AdminRefundsListPage from "./pages/AdminRefundsListPage.jsx";
// import { Amplify } from "aws-amplify";
// import { awsmobile } from "../aws-exports";


const App = () => {
  // Amplify.configure(awsmobile);


  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    Store.dispatch(getAllEvents());
  }, []);

  return (
    <div className="app-wrapper">

  
    <BrowserRouter>
     
      {/* <VillajaHeader/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/login" element={<CustomerLogin />} />
        <Route path="/user/signup" element={<CustomerSignUp />} />
        <Route path="/user/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route
          path="/seller/activation/:activation_token"
          element={<SellerActivationPage />}
        /> 
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/all" element={<AllProducts/>} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/reviews/:id" element={<ProductReviews />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/terms-conditions" element={<TermsAndConditions/>} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route path="/order/success" element={<OrderSuccessPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        /> 
        <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <PaymentPage />
                </ProtectedRoute>
              }
            />
        <Route
          path="/inbox"
          element={
            <ProtectedRoute>
              <UserInbox />
            </ProtectedRoute>
          }
        /> 
        <Route
          path="/user/order/:id"
          element={
            <ProtectedRoute>
              <OrderDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/track/order/:id"
          element={
            <ProtectedRoute>
              <TrackOrderPage />
            </ProtectedRoute>
          }
        />
        <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />


        {/* Seller Routes */}
        <Route path="/shop/home" element={<SellerHomePage />} />
        <Route path="/shop/signup" element={<SellerSignUp />} />
        <Route path="/shop/login" element={<SellerLogin />} />
        <Route
          path="/shop/:id"
          element={
            <SellerProtectedRoute>
              <ShopHomePage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <SellerProtectedRoute>
              <ShopSettingsPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <SellerProtectedRoute>
              <ShopDashboardPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-create-product"
          element={
            <SellerProtectedRoute>
              <ShopCreateProduct />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/update-product/:id"
          element={
            <SellerProtectedRoute>
              <ShopUpdateProduct />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-orders"
          element={
            <SellerProtectedRoute>
              <ShopAllOrders />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-refunds"
          element={
            <SellerProtectedRoute>
              <ShopAllRefunds />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/order/:id"
          element={
            <SellerProtectedRoute>
              <ShopOrderDetails />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-products"
          element={
            <SellerProtectedRoute>
              <ShopAllProducts />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-create-event"
          element={
            <SellerProtectedRoute>
              <ShopCreateEvents />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-events"
          element={
            <SellerProtectedRoute>
              <ShopAllEvents />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-coupouns"
          element={
            <SellerProtectedRoute>
              <ShopAllCoupouns />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-withdraw-money"
          element={
            <SellerProtectedRoute>
              <ShopWithDrawMoneyPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-messages"
          element={
            <SellerProtectedRoute>
              <ShopInboxPage />
            </SellerProtectedRoute>
          }
        />


        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-users"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardUsers />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-order/:id"
          element={
            <ProtectedAdminRoute>
              <AdminOrderDetails />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-sellers"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardSellers />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-orders"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardOrders />
            </ProtectedAdminRoute>
          }
        />
         <Route
          path="/admin-products"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardProducts />
            </ProtectedAdminRoute>
          }
        />
         <Route
          path="/admin-events"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardEvents />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-refund-request"
          element={
            <ProtectedAdminRoute>
              <AdminRefundPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-refunds"
          element={
            <ProtectedAdminRoute>
              <AdminRefundsListPage />
            </ProtectedAdminRoute>
          }
        />
         <Route
          path="/admin-withdraw-request"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardWithdraw />
            </ProtectedAdminRoute>
          }
        />

        
      </Routes>
      {/* <VillajaFooter/> */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
    </div>
  );
};

export default App;
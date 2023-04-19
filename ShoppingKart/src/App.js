import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

/* Components */
import Header from "./components/Header";

/* Context */
import ProductContextProvider, {
  ProductsContext,
} from "./context/ProductContextProvider";
import CartContextProvider, {
  CartContext,
} from "./context/CartContextProvider";
import WishListContextProvider, {
  WishListContext,
} from "./context/WishListContextProvider";

export { ProductsContext, CartContext, WishListContext };

/* Pages */
import ProductLists from "./pages/ProductLists";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ProductContextProvider>
          <Header />
          <WishListContextProvider>
            <CartContextProvider>
              <Routes>
                <Route path="/" element={<ProductLists />} />
                <Route
                  path="/product/:productId"
                  element={<ProductDetails />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishList" element={<WishList />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </CartContextProvider>
          </WishListContextProvider>
        </ProductContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import { ShoppingCart } from "../../components/Header/ShoppingCart"
import { useContext } from "react"
import { getDron } from "../../Context/UserProvider"
import { TotalCart } from "../../components/Header/TotalCart"
import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import "./PageCard.css"



export const PageCart=()=>{
  const {cart, setCartQuantity}=useContext(getDron)
  setCartQuantity(cart.length)
  return cart.length > 0 ? (
    <div className="main-container">
      <Header />
      <ShoppingCart />
      <TotalCart />
      <Footer className="footer" />
    </div>
  ) : (
    <div className="main-container">
      <Header />
      <div className="emptycart"><h2>Tu carrito está vacío</h2></div>
          
      <Footer className="footer"/>
    </div>
  );
};  

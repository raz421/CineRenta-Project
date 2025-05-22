import { useContext, useState } from "react";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import ShoopingCart from "../assets/shopping-cart.svg";
import { MovieContext, ThemeContext } from "../context";
import CardDetails from "./CardDetails";
export default function Headrer() {
  const { cards } = useContext(MovieContext);
  const { dark, setDark } = useContext(ThemeContext);
  const [showCartModal, setShowCartModal] = useState(false);
  const handleCartModal = () => {
    setShowCartModal(true);
  };
  return (
    <header>
      {showCartModal && (
        <CardDetails onCloseModal={() => setShowCartModal(false)} />
      )}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="Logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDark(!dark)}
            >
              <img src={dark ? Sun : Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartModal}
            >
              <img src={ShoopingCart} width="24" height="24" alt="cart" />
              {cards.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cards.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

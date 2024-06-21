import React, { useState, useEffect, createContext} from "react";
import {useContext} from 'react';
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHouse } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../context/CartContext";
import foodType from '../../../../../Asset/data/foodType.json'

function myFunction() {
  document.getElementById("").classList.toggle("show");
}

window.onClick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-box");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropDown = dropdowns[i];
      if (openDropDown.classList.contains("show")) {
        openDropDown.classList.remove("show");
      }
    }
  }
};

function Home() {
  const [data, setdata] = useState([]);
//   const {addCart, setAddCart} = useContext(CartContext);

  function addToCart(item) {
    setAddCart((previous) => {
      return [...previous, item];
    });
  }
  
  return (
    <div>
      <div className="food-container">
        <nav className="navbar">
          <h1>Bezite Chop</h1>
          <FontAwesomeIcon icon={"fa-solid fa-bowl-food"} />
          <ul className="ul-list">
            <li>Store</li>
            <li>place an order</li>
            <li>
              <form>
                <label>
                  Search for food:
                  <input type="text" />
                </label>
              </form>{" "}
            </li>
            <li>
              <button onclick="myFunction()" class="dropbtn">
                Help
                <div
                  onClick={myFunction}
                  id="myDropdown"
                  class="dropdown-content"
                >
                  <a href="#">ContactUs</a>
                  <a href="#">Track my id</a>
                  <a href="#">FAQs</a>
                </div>
              </button>
            </li>
          </ul>

          <h3>login</h3>
          <h3>signup</h3>

          <FontAwesomeIcon icon={faCartShopping} />
        </nav>
        <div>
          <p
            style={{ color: "blue" }}
          >{`Number of items in cart is ${addCart.length}`}</p>
          <Link to={"/showcart"}>
            <p className="cart-move," style={{ color: "blue" }}>
              Go to cart
            </p>
          </Link>
        </div>
        <div className="items">
          {foodType?.map((item) => {
            return (
              <div className="items-child" key={item.id}>
                <img
                  className="img"
                  src={item.image}
                  alt=""
                  width={150}
                  height={150}
                />
                <p>name of food:{item.title}</p>
                <p>${item.price}</p>
                <button
                  className="button"
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  addCart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

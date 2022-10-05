import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import cartData from "../sampleData/cartData";

function Cart() {
  const sampleData = {
    userId: "2",
    cart: [
      {
        id: "11",
        name: "Dell UltraSharp 24-inch FHD Monitor",
        description:
          "Dell UltraSharp 24-inch FHD Monitor - U2419HX. Full HD 1920 x 1080, 60 Hz. Tilt, swivel, pivot and vertical extension adjustment capabilities",
        brand: "Dell",
        price: "245",
        category: "monitor",
        quantity: 1,
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      },
      {
        id: "14",
        name: "Cimetech Wireless Keyboard Mouse Combo",
        description:
          "Wireless Keyboard Mouse Combo, Cimetech Compact Full Size Wireless Keyboard and Mouse Set 2.4G Ultra-Thin Sleek Design for Windows, Computer, Desktop, PC, Notebook - (Wine red)",
        brand: "Cimetech",
        price: "230",
        category: "accessories",
        quantity: 3,
        image:
          "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      },
      {
        id: "15",
        name: "Cimetech Wireless Keyboard Mouse Combo",
        description:
          "Wireless Keyboard Mouse Combo, Cimetech Compact Full Size Wireless Keyboard and Mouse Set 2.4G Ultra-Thin Sleek Design for Windows, Computer, Desktop, PC, Notebook - (Wine red)",
        brand: "Cimetech",
        price: "223",
        category: "accessories",
        quantity: 3,
        image:
          "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      },
      {
        id: "146",
        name: "Cimetech Wireless Keyboard Mouse Combo",
        description:
          "Wireless Keyboard Mouse Combo, Cimetech Compact Full Size Wireless Keyboard and Mouse Set 2.4G Ultra-Thin Sleek Design for Windows, Computer, Desktop, PC, Notebook - (Wine red)",
        brand: "Cimetech",
        price: "243",
        category: "accessories",
        quantity: 3,
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      },
      {
        id: "144",
        name: "Cimetech Wireless Keyboard Mouse Combo",
        description:
          "Wireless Keyboard Mouse Combo, Cimetech Compact Full Size Wireless Keyboard and Mouse Set 2.4G Ultra-Thin Sleek Design for Windows, Computer, Desktop, PC, Notebook - (Wine red)",
        brand: "Cimetech",
        price: "283",
        category: "accessories",
        quantity: 3,
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      },
    ],
  };
  const [cartItem, setCartItem] = useState([]);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    // console.log(cartData.cartData)
    setCartItem(cartData.cartData.cart);
    setUserId(cartData.cartData.userId);

    // (async () => {
    //   const data = await axios.get("https://fakestoreapi.com/carts/user/2");
    //   if (data.data.length > 0) {
    //     let arr = [...data.data];
    //     console.log(arr);
    //     setUserId(arr[0].userId)
    //     setCartItem(arr[0].products);
    //     console.log(arr);
    //   }
    //   // setProducts(data);
    // })();
  }, []);

  const handleadd = (e) => {
    console.log("aad");
    let id = e.target.id;
    let objIndex = cartItem.findIndex((obj) => obj.id == id);
    cartItem[objIndex].quantity = cartItem[objIndex].quantity + 1;
    console.log(cartItem);
    // updateCart();
    setCartItem([...cartItem]);
  };
  const handledec = (e) => {
    let id = e.target.id;
    let objIndex = cartItem.findIndex((obj) => obj.id == id);
    cartItem[objIndex].quantity =
      cartItem[objIndex].quantity > 0 ? cartItem[objIndex].quantity - 1 : 0;
    console.log("dec");
    // updateCart();
    setCartItem([...cartItem]);
  };
  const updateCart = () => {
    console.log(userId);
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        date: "2020-02-03",
        products: [
          { productId: 5, quantity: 1 },
          { productId: 1, quantity: 5 },
        ],
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  const totalPrice = () => {
    let sum = 0;
    cartItem.forEach((arrayItem) => {
      sum += arrayItem.price * arrayItem.quantity;
    });
    console.log(sum);
    return sum;
  };
  return (
    <div>
      <h2>Cart</h2>

      {cartItem.map((val, key) => {
        return (
          <div
            className="cart-item"
            style={{ marginLeft: "30px", display: "flex" }}
          >
            <img
              className="cart-item__image"
              style={{ width: "20vh", marginRight: "30px" }}
              src={val.image}
              alt={"rere"}
            />
            <div className="cart-item__details">
              <h4 className="cart-item__details-name">{val.name}</h4>
              <div className="cart-item__details-qty">
                <button id={val.id} onClick={handleadd}>
                  +
                </button>
                <button id={val.id} onClick={handledec}>
                  -
                </button>
              </div>
              <div className="cart-item__details-price"> quantity: {val.quantity}</div>
            </div>
            <button
              id={val.id}
              type="button"
              className="cart-item__remove"
              style={{ height: "5vh", marginRight: "30px" }}
            >
              Remove
            </button>
          </div>
        );
        //   <tr key={key}>
        //     <td>{val.name}</td>
        //     <td>
        //       {val.quantity}
        //       <button id={val.productId} onClick={handleadd}>
        //         +
        //       </button>
        //       <button id={val.productId} onClick={handledec}>
        //         -
        //       </button>
        //     </td>
        //   </tr>
        // );
      })}
<h2>Total Price = {totalPrice()}</h2>
      <Link to="checkout" state={{ cartData: cartItem, userId: userId }}>
        checkout
      </Link>
      <Outlet />
    </div>
  );
}

export default Cart;

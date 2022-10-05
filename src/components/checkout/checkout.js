import * as React from "react";
import { Box, Container } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useLocation } from "react-router-dom";
import cartData from "../sampleData/cartData";

export default function Checkout({ props }) {
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
        price: "23",
        category: "accessories",
        quantity: 3,
        image:
          "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      },
    ],
  };
  const location = useLocation();
  console.log(location);
  console.log(props);
  const [inputField, setInputField] = useState({
    first_name: "",
    last_name: "",
    gmail: "",
  });

  const inputsHandler = (e) => {
    setInputField({ [e.target.name]: e.target.value });
  };

  const submitButton = () => {
    alert(inputField.first_name);
    //call Post API for place Order
  };

  return (
    <div>
      <input
        type="text"
        name="first_name"
        onChange={inputsHandler}
        placeholder="First Name"
        value={inputField.first_name}
      />

      <br />

      <input
        type="gmail"
        name="gmail"
        onChange={inputsHandler}
        placeholder="Gmail"
        value={inputField.gmail}
      />

      <br />
      <input
        type="text"
        name="address"
        onChange={inputsHandler}
        placeholder="address"
        value={inputField.last_name}
      />
      <br />

      <button onClick={submitButton}>place order</button>
    </div>
  );
}

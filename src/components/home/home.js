import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemCard from "../card/card.js";
import Loder from "../loder/loder"
function Home() {
  // const [loding, setScoops] = useState(true);
  // const [products, setProducts] = useState([]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await axios.get("https://fakestoreapi.com/products");
      if (data.data.length > 0) {
        setData(data.data);
      }
      // setProducts(data);
    })();
  }, []);


  // const fetchScoops = async () => {
  //   let res = await fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((res) => setProducts(res))
  // };
  // useEffect(() => {
  //   fetchScoops();
  // }, []);
  const setData =(data) =>{
    setProducts(data)
    console.log(data)
    console.log(products);
  }
  return (
    <>
    <div>
      
      {
        products.length < 0 ? <Loder></Loder> : 
      products.map(function (item, i) {
      return <ItemCard
      props={item}
       />
      //  return <h2>{i}</h2>
      })
      }
      </div>
    </>
    // <Router>
    // <Navbar />
    // <Routes>
    // 	<Route path='/' exact component={Home} />
    // 	<Route path='/about' component={About} />
    // 	<Route path='/events' component={Events} />
    // 	<Route path='/annual' component={AnnualReport} />
    // 	<Route path='/team' component={Teams} />
    // 	<Route path='/blogs' component={Blogs} />
    // 	<Route path='/sign-up' component={SignUp} />
    // </Routes>
    // </Router>
  );
}

export default Home;

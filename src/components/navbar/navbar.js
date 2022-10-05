import React from 'react';
import {useState,useEffect} from 'react'
import {Link,Outlet} from 'react-router-dom';
import axios from "axios";
function Navbar() {

    const [cartItem,setCartItem]= useState([]);
    useEffect(() => {
        (async () => {
          const data = await axios.get("https://fakestoreapi.com/carts/user/2");
          if (data.data.length > 0) {
            setCartItem(data.data[0].products);
          }
          // setProducts(data);
        })();
      }, []);
    
    return (
        <div>
            <nav>
                <ul>
                    <Link to='/home'>Home</Link>
                </ul>
                <ul>
                    <Link to='about'>About</Link>
                </ul>
                <ul>
                    <Link to='cart'>got to cart={cartItem.length}</Link>
                </ul>
                <ul>
                    <Link to='login'>Login</Link>
                </ul>

                
                <Outlet></Outlet>

            </nav>
            
        </div>
    )
}

export default Navbar

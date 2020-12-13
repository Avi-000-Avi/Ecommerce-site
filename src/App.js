import React, {useState, useEffect} from 'react';
import {Products, Navbar} from './components';
import {commerce} from './lib/commerce';

//import Products from './components/Products/Products';
//import Navbar from './components/Navbar/Navbar';

//Fetch the products immediately on the Application load

const App = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState({});
    //Fetch the repsonse from  await so we have to await somehing and that something is going to be a specific api call to this commerce instance 
    //This will return a promise so we to await to see what is inside of the promise
    const fetchProducts = async () => {
        const {data} = await commerce.products.list();
    
        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddTocart = async (productId,quantity) => {
        const item = await commerce.cart.add(productId,quantity);
    
        setCart(item.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    },[]);


    return (
        <div>
            <Navbar/>
            <Products products ={products} onAddToCart = {handleAddTocart}/>
        </div>
    )
}

export default App;

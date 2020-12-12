import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes', price: 'Rs 1500', image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    { id: 2, name: 'Macbook', description: 'Apple Macbook',price: 'Rs 1,50,000', image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
];

const Products = ()  => {
    const classes = useStyles();

    return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify = "center" spacing = {4}>
            { products.map((product) => (
                <Grid item key ={product.id} xs ={12} sm = {6} md = {4} lg = {3}>
                    <Product product = {product}/>                
                </Grid>
            ))} 
        </Grid>
    </main>
    )
}

export default Products;
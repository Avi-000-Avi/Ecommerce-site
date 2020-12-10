import React from 'react'
import {card, CardMedia, CardContent, CardActions, Typography, IconBotton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';

import useStyles from './styles';



const Product = ({product}) => {
    const classes = useStyles();

    return (
        <Card className ={classes.root}>
            <CardMedia className = {class.media} image='' title={product.name}/>
            <CardContent>
                <div className ={classes.cardContent}>
                    <Typography variant ="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant ="h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography variant ="h2" color="textSecondary">
                        {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className ={classes.cardActions}>
                <IconBotton aria-label ="Add to cart">
                    <AddShoppingCart/>
                </IconBotton>
            </CardActions>
        </Card>
        )
}

export default Product

import React from "react";
import { IProduct } from "../utils/interface";
import { Grid, Typography, Button } from "@material-ui/core";

interface IProductObject{
    product:IProduct
}
const ProductObject=(props:IProductObject)=>{

    const {product}=props

    return(
        <Grid container spacing={3} style={{width:'100%',padding:'20px 0px',margin:'0px',borderBottom:'1px solid rgb(204, 198, 198)'}}>
            <Grid item style={{width:'30%'}}>
                <img src={Object.values(product.image_urls)[0]} width='100px' height='100px'/>
            </Grid>
            <Grid item style={{width:'60%'}}>
                <Grid container direction='column' alignItems='flex-start'>
                    <Typography variant='button'>{product.name}</Typography>
                    <Typography variant='caption'>({product.weight} {product.weight_unit})</Typography>
                    <Typography variant='button'>₹{product.final_price}  <del style={{color:'grey'}}>₹{product.price}</del></Typography>
                    <Button disabled={!product.is_in_stock} style={{color:'white',width:'70%',borderRadius:'3px',backgroundColor:product.is_in_stock?'rgb(52, 197, 52)':'rgb(199, 193, 193)',border:'none'}}>{product.is_in_stock?'Add to cart':'Out of stock'}</Button>
                </Grid>
            </Grid>
            <Grid item style={{width:'10%'}}>--</Grid>
        </Grid>  
)}
export default ProductObject
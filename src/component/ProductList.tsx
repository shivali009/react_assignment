import React, { useState, useEffect } from "react";
import { IProductList } from "../utils/interface";
import ProductObject from "./ProductObject";

const ProductList=(props:any)=>{

    const {categoryId,viewAll}=props
    const [productList,setProductList]=useState({} as IProductList)

    useEffect(()=>{
        fetch(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${categoryId}
        `).then(res=>res.json()).then(res=>setProductList(res)).catch(err=>{console.log(err)})
    },[categoryId,productList])

    const products=viewAll?productList.products && productList.products:productList.products && productList.products.slice(0,3)
  
    return(
        <>
        {productList.products && products.map((product,index)=>
              <ProductObject key={index} product={product}/>
          )} 
        </>
    )
}
export default ProductList
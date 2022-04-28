import React,{useState,useEffect} from 'react';
import {Grid} from '@mui/material';
import { useSelector } from 'react-redux';
import Product from './Product/Product';
import useStyles from './styles';
import { Box } from '@mui/material';
const Products=()=>{
    const datas = useSelector((state) => state.orderDetails);
    const classes=useStyles();
    const [total,setTotal]=useState(0);
    useEffect(()=>{
          setTotal(()=>{
            var tot=0;
            for(var i=0;i<datas.length;i++)
            {
              var data=datas[i];
              tot+=(data.base_price-data.discount_percentage/100*data.base_price+data.tax_amount).toPrecision(6)*data.quantity;
            }
            return tot.toPrecision(6);
          })
    },[datas])
    return(

        <Grid container alignItems="stretch" spacing={3}>
    {datas.map((data)=>(
      <Grid key={data.product_id} className={classes.grid} item  xs={12} sm={3}>
        <Product  data={data}/>
      </Grid>
    ))}
      <Box className={classes.total} >
         <b><h1>Total: {total} &euro;</h1> </b> 
      </Box>
      

  </Grid>
    )
}
export default Products;
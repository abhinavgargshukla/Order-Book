import React from 'react';
import { Card,CardContent,Typography,Button,CardActions } from '@mui/material';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import { deleteOrder } from '../../../actions/orderDetails.js';



const Product=({data})=>{
    const classes=useStyles();
    const dispatch=useDispatch();
 
    return(
        <Card className={classes.card} >
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
            <b>{data.product_name}</b>  
          </Typography>
          <Typography variant="body2">
           Manufactured By: {data.manufacturer}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Qty:{data.quantity}
          </Typography>
          <Typography variant="h7" component="div">
              <b>Price</b>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.base_price} &#x20AC;
          </Typography>
          <Typography variant="h7" component="div">
              <b>Discount</b>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-{data.discount_percentage*data.base_price} &#x20AC;
          </Typography>
          <Typography variant="h7" component="div">
              <b>Tax</b>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.tax_amount} &#x20AC;
          </Typography>
          <Typography variant="h7" component="div">
              <b>Total</b> : {(data.base_price-data.discount_percentage/100*data.base_price+data.tax_amount).toPrecision(6)}*{data.quantity}=<b>{(data.base_price-data.discount_percentage/100*data.base_price+data.tax_amount).toPrecision(6)*data.quantity}</b> &#x20AC;
          </Typography>
          
          
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>{dispatch(deleteOrder(data))}} >Delete Order</Button>
        </CardActions>
      </Card>
    )
}
export default Product;

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card,CardContent,Typography,Button,CardActions } from '@mui/material';
import { showProducts } from '../../../actions/orderDetails';
import useStyles from './styles';
const Order=({data})=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
   const classes=useStyles();
    return(
        <Card sx={{ minWidth: 275 }} className={classes.card}>
      <CardContent>
        <Typography sx={[{ fontSize: 30},{fontWeight:"bold" }]} color="text.secondary" gutterBottom>
        Order Id : {data.order_id}
        </Typography>
        <Typography sx={[{ mb: 1.5 },{fontSize:18}]} color="text.secondary">
          Ordered By:{data.customer_full_name}
        </Typography>
        <Typography variant="h7" component="div">
          <b>Email</b>: {data.email}
        </Typography>
        <Typography sx={[{ mb: 1.5 },{fontSize:18}]} color="text.secondary">
          Total Products:{data.products.length}
        </Typography>
        <Typography variant="body2">
          <b>{data.order_date}</b>
        </Typography>
       
      </CardContent>
      <Button className={classes.Button} size="small" variant="contained" onClick={()=>dispatch(showProducts(navigate,data.products)) } color="info">View Order</Button>
      <CardActions>
       
      </CardActions>
    </Card>
    )
}
export default Order;
import React,{useState} from "react";
import { Container,Paper,Box } from "@mui/material";
import { useDispatch } from 'react-redux';
import { TextField,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { showOrders,showAll } from "../../actions/orders";

import useStyles from './styles';



const Home=()=>{

    const classes=useStyles();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [postData, setPostData] = useState({
        email: "",
        orderid: "572903"
      });

      const clear=()=>{
        setPostData({
          email: "",
          orderid: "",
        });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
          dispatch(showOrders(navigate,postData));
        clear();
        
    
      };
    return (
       <Box className={classes.box}>
          <Paper className={classes.paper} elevation={9}>
            <form className={classes.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
            <TextField
              className={classes.textbox}
                fullWidth
                sx={{width:"80%"}}
                name="orderid"
               variant="outlined"
               label="Order Id"
               value={postData.orderid}
               onChange={(e) => setPostData({ ...postData, orderid: e.target.value })}
        />
                        <p>Or</p>
<TextField
              className={classes.textbox}
              sx={{width:"80%"}}
                name="email"
               variant="outlined"
               label="Email"
               value={postData.email}
               onChange={(e) => setPostData({ ...postData, email: e.target.value })}
        /> 

        
        <Button sx={{margin:'3vh 0 0 0'}} type="submit"  variant="contained" color="primary" >
                    Submit
        </Button>
            </form>
            <Button sx={{margin:'0 0 1vh 0'}} onClick={()=>dispatch(showAll(navigate))}  variant="contained" color="secondary" >
                  All Orders
        </Button>
        </Paper>
       </Box>
       
    )
}
export default Home;
import * as React from "react";
import { useState, useEffect } from "react";
import { Grid, Button, Container, Paper, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sortByDate, filterOrders } from "../../actions/orders";
import useStyles from "./styles";

import Order from "./Order/Order";
import { useNavigate } from "react-router-dom";

//
const Orders = () => {
  const datas = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filterData, setFilterData] = useState({
    category: "",
    supplier: "",
    productName: "",
  });

  const clear = () => {
    setFilterData({
      category: "",
      supplier: "",
      productName: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterOrders(navigate, filterData, datas));
    clear();
  };

  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Grid container rowSpacing={1}>
            <Grid item xs={3}>
              <TextField
                name="category"
                variant="outlined"
                label="Category"
                value={filterData.category}
                onChange={(e) =>
                  setFilterData({ ...filterData, category: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="supplier"
                variant="outlined"
                label="Manufacturer"
                value={filterData.supplier}
                onChange={(e) =>
                  setFilterData({ ...filterData, supplier: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="productName"
                variant="outlined"
                label="Product Name"
                value={filterData.productName}
                onChange={(e) =>
                  setFilterData({ ...filterData, productName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                size="large"
                type="submit"
                variant="contained"
                color="secondary"
              >
                Filter Data
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>

      <Container className={classes.bydate}>
        <Button
          size="small"
          variant="contained"
          onClick={() => dispatch(sortByDate(datas, navigate))}
        >
          Sort By date
        </Button>
      </Container>
      <Grid container alignItems="stretch" spacing={3}>
        {datas.map((data) => (
          <Grid className={classes.grid}item key={data.order_id} xs={12} sm={3}>
            <Order data={data} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Orders;

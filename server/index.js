import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import data from './data.js';

import orderRoutes from './routes/orders.js'
setTimeout(()=>{},100);

const app = express();
const PORT =  8000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/orders',orderRoutes);

app.listen(PORT, () => console.log(`server running on port :${PORT}`));

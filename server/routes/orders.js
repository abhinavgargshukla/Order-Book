import express from 'express';
import {getOrdersById,getOrdersByEmail,getAllOrders} from '../controllers/orders.js';

const router=express.Router();

router.get("/id/:id",getOrdersById);
router.get("/email/:email",getOrdersByEmail);
router.get("/all",getAllOrders);



export default router;

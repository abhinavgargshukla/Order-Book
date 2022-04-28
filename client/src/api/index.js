import axios from 'axios';

const API=axios.create({baseURL:'http://localhost:8000'});

export const fetchOrdersbyId=(id)=>API.get(`/orders/id/${id}`);
export const fetchOrdersbyEmail=(email)=>API.get(`/orders/email/${email}`);
export const fetchAll=()=>API.get(`/orders/all`);

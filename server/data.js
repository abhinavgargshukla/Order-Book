import csv from 'csv-parser';

import fs from 'fs';
const results=[];
const fun=async()=> fs.createReadStream('ecommerce.csv')
  .pipe(csv({})).on('data',(data)=>results.push(data))
  .on('end',()=>{
      
      console.log(typeof(results[0].order_id));
      const obj=JSON.parse(results[0].products);
      console.log(typeof(obj[1].base_price));
  });
  fun();
  export default results;
 
import React from 'react';
import * as ReactBoostrap from 'react-bootstrap';


const DataPreview = ({comapnys, ticker, stockPrice,timeElapsed}) =>{
    console.log(comapnys)
return <div>
    
<ReactBoostrap.Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Company</th>
      <th>Ticker</th>
      <th>Stock Price</th>
      <th>Time Elapsed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{comapnys}</td>
      <td>{ticker}</td>
      <td>{stockPrice}</td>
      <td>{timeElapsed}</td>
    </tr>
  
  </tbody>
</ReactBoostrap.Table>
</div>
};
export default DataPreview;
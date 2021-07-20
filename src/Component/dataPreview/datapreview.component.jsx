import React from 'react';
import * as ReactBoostrap from 'react-bootstrap';


const DataPreview = ({company, ticker, stockPrice,timeElapsed}) =>{
    console.log(company)
return <div>
    
<ReactBoostrap.Table responsive="md">
  
  <tbody>
    <tr>
      <td>{company}</td>
      
      <td>{ticker}</td>
      <td>{stockPrice}</td>
      <td>{timeElapsed}</td>
    </tr>
  
  </tbody>
</ReactBoostrap.Table>
</div>
};
export default DataPreview;
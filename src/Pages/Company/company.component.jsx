import React from "react";
import COMPANY_DATA from "../Company/company_data";
import DataPreview from "../../Component/dataPreview/datapreview.component";
import * as ReactBoostrap from 'react-bootstrap';
class CompanyPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
      collections : COMPANY_DATA,
    
    };
    }

    render(){
        const {collections}= this.state;
console.log(collections)
        return (

            <div>
                <ReactBoostrap.Table >
                <thead>
    <tr>
      <th>Company</th>
      <th>Ticker</th>
      <th>Stock Price</th>
      <th>Time Elapsed</th>
    </tr>
  </thead>
                </ReactBoostrap.Table>
                {collections.map(({id,...otherData})=>(
                    <DataPreview key={id} {...otherData}/>
                ))
                
                
                }
            </div>
        );
    }




}

export default CompanyPage;
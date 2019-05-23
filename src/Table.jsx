import React, { Component } from 'react';
import Popup from "reactjs-popup";
import EditFlags from "./EditFlags"; 
import ReactTable from 'react-table';
import 'react-table/react-table.css'
class Table extends Component{
//tableDataList=[];
cols=[{Header:'Flag Name',accessor:'name'},{Header:'Message',accessor:'message'},{Header:'Priority',accessor:'priority'}]

state={
    testVar:'test',
    tableData:[{name:'Flag A',message:'Good flag',priority:'HIGH'}
    ],
    tableDataList:[]
};

getData(){
    return this.tableDataList;
}

myCallback= (dataFromChild) => {
    console.log('Data Recieved from child '+ dataFromChild);
    //this.state.tableDataList.push(dataFromChild); 
    this.setState({
        tableDataList: [...this.state.tableDataList, dataFromChild]
      })
}
    render(){
        return (
        <React.Fragment>
            <ReactTable columns={this.cols} data={this.state.tableDataList}
            />
            <Popup trigger={<button className="btn btn-success"> New Flag </button>} modal closeOnDocumentClick>
                <a className="close">x</a>
                <EditFlags callBackFromParent={this.myCallback.bind(this)}/>  
            </Popup>
        </React.Fragment>
        );
    }
}
export default Table;
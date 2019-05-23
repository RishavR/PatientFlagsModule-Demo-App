import React, { Component } from 'react';


class EditFlags extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            editData:{
                name: '',
                message:'',
                priority:'',
            } 
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset= this.handleReset.bind(this);
      }
    
      handleChange(name, event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        //const name = target.name;
        console.log(name+" "+value);
        this.setState((prevState) =>({
        ...prevState,
        editData:{
        ...prevState.editData,
         [name]: value
        }
        }));
      }
      
      handleReset(event){
        this.setState({
            editData:{
                name: '',
                message:'',
                priority:''
            }
            
        });
        event.preventDefault();
      }
    
      handleSubmit(event) {
        this.props.callBackFromParent(this.state.editData);
        alert('A name was submitted: ' + this.state.editData.name);
        event.preventDefault();
      }
      render() {
        return (
            <React.Fragment>
              <form className="container" onSubmit={this.handleSubmit} onReset={this.handleReset}> 
                <div className="form-group">
                    <label for="flg">Name:</label>
                        <input type="text" className="form-control" id="flg" onChange = {this.handleChange.bind(this,'name')}/>
                </div>
                <div className="form-group">
                    <label for="msg">Message:</label>
                     <input type="text" className="form-control" id="msg"   onChange = {this.handleChange.bind(this,'message')}/>
                </div>
                <div className="form-group">
                <select  className="form-control" onChange={this.handleChange.bind(this,'priority')}>
                    <option value="HIGH">HIGH</option>
                    <option value="LOW">LOW</option>
                    <option value="MEDIUM">MEDIUM</option>
             </select>
             </div>
                <input type="submit" value="Save" className="btn btn-primary"/>
                &nbsp;<input type="reset" value="Reset" className="btn btn"/>
              </form>
             </React.Fragment>
            );
      }
}

export default EditFlags;

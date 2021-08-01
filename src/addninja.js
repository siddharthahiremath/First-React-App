import React, { Component } from 'react'
class Addninja extends Component{

  constructor(props) {
    super(props)
    this.state = {
      Name:null,
      Age:null
    }
  }
    
  
    Handlechangename = (Input) => {
     this.state.Name = Input.target.value
     this.forceUpdate();
    }
    Handlechangeage = (Input) => {
    this.state.Age = Input.target.value
        this.forceUpdate();
      }
 onClick = (input) => {
   this.props.addToNinjas(this.state.Name, this.state.Age)
   this.forceUpdate();
}

    render(){
        return(
            <div>
                            
                {this.state.Name}
                <br/>
                {this.state.Age}
          
            <form>
            <label htmlfor="name">Name</label>
            <input type="text" onChange={this.Handlechangename} id='name'/>
            <label htmlfor="name">Age:</label>
            <input type="text" onChange={this.Handlechangeage} id='age'/>
            </form>
            <button onClick={this.onClick}>Submit</button>
            </div>
        )
    }
}
export default Addninja;
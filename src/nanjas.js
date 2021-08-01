import React, { Component } from 'react';
class Ninjas extends Component{
    render(){
        var greaterage = ""
        var agelimit = 40
        const name = this.props.name;
        const age = this.props.age;
        if ( age > agelimit ) {
        greaterage = "You are above "+agelimit; 
        } else {
    greaterage = "" 
        }
        console.log(this.state)
        return(
            <div>
            <p>{name+' '+age}</p>
            </div>
        )
    }
}

export default Ninjas;
import Ninjas from "./nanjas";
import React, { Component } from "react";
import Addninja from "./addninja";
import axios from "axios";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import './App.css';
const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/images/search'
})
var dataholder = null
class App extends Component {
  
  renderNinjasFromState = () => {
    var return_list = [];
    this.state.ninjas.forEach((item) => {
      return_list.push(<Ninjas name={item.title} age={item.link} />);
    });
    //  this.state.ninjas.forEach(s => {
    //   return_list.push(<tr><td>{s.title}</td><td>{s.link}</td></tr>)
    // })

    return return_list;

    // <Ninjas name={item.title} age={item.link} /> == <tr><td>{s.title}</td><td>{s.link}</td></tr>
  };
  constructor(props) {
    super(props);
    this.state = {
      ninjas: [
        { title: "name 1", link: 44},
        { title: "name 2", link: 40 },
        { title: "name 3", link: 9 },
        { title: "name 4", link: 9 },
      ],
      imageLink: "",
    };
  this.showPicture()
    
  }

  showPicture = () => {
    api.get('/').then(
      (res) => {
          dataholder = res.data
          console.log(dataholder[0].url)
         this.setState({imageLink: dataholder[0].url})
      }
    )
  }
  
  componentDidMount() {
    this.interval = setInterval(this.showPicture,5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

 
  addToNinjas = (name, age) => {
    this.state.ninjas.push({ title: name, link: age });
    this.forceUpdate();
  };
  render() {  
    return (
      <div className="App">
        <title>sid</title>
        <h1>My first React App</h1>
        <p>Welcome</p>
        <table>
          <tr style={{ border: "1px solid" }}>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {this.renderNinjasFromState()}
        </table>
        <Addninja addToNinjas={this.addToNinjas} />
        <img src={this.state.imageLink} className="Catpic"/>
      </div>
    );
  }
}
export default App;

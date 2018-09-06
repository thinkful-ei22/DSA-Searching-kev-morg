import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const arr = [
  89, 30, 25, 32 ,72 ,70, 51 ,42,25 ,24, 53, 55, 78, 50, 13, 
  40, 48, 32, 26, 2 ,14 ,33, 45, 72 ,56, 44, 21, 88, 27, 68 ,15 ,
  62, 93, 98 ,73, 28, 16, 46, 87 ,28, 65, 38, 67, 16, 85, 63, 23 ,
  69, 64, 91, 9 ,70 ,81, 27 ,97, 82, 6 ,88, 3,7 ,46, 13 ,11, 64, 76,
  31, 26, 38 ,28, 13 ,17,69 ,90, 1, 6 ,7, 64, 43 ,9, 73 ,80 ,98, 46 ,
  27, 22, 87, 49, 83, 6 ,39, 42 ,51, 54, 84 ,34, 53 ,78, 40, 14, 5];
const sortArr = [...arr].sort((a,b) => {return a-b;});
const sortArr2 = [...arr].sort();
console.log(sortArr2);
  
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchNum: 0,
      linearOp: 0,
      binaryOp: 0,
    };
  }
  binarySearch(arr, val, start = 0, end = arr.length, counting = 0){
    if(start > end){
      this.setState({binaryOp: -1});
      return;
    }
    const index = Math.floor((start + end ) / 2);
    const item = arr[index];
    console.log(start, end, arr);
    console.log(item ,index, val, 'item, index and val');
    if(item === val){
      console.log(counting, 'finalcount');
      this.setState({binaryOp: counting});
      return index;
    }
    else if(item < val){
      counting++;
      console.log(counting, 'count1');
      return this.binarySearch(arr, val, index + 1, end, counting);
    }
    else if(item > val){
      counting++;      
      console.log(counting, 'count2');
      return this.binarySearch(arr, val, start, index -1, counting);
    }

  }

  linearSearch(arr, val){
    let counter = 0;
    // console.log(this.state.operations);
    for(let i = 0; i < arr.length; i++){
      counter++;
      if(arr[i] === val){
        this.setState({linearOp: counter});
        return i;
      }
    }
    this.setState({linearOp: counter});
    return -1;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={e => {
          const val = parseInt(e.target.search.value);
          e.preventDefault();
          this.setState({searchNum: val});
          this.linearSearch(arr,val);
          this.binarySearch(sortArr, val);
        }}>
          <input type='text' name='search'></input>
          <button>Submit</button>
        </form>
        <div>
          <p>This input of {this.state.searchNum} took {this.state.linearOp} linear operations</p>
          <p>This input of {this.state.searchNum} 
            {this.state.binaryOp === -1 ? 'was not found' : `took ${this.state.binaryOp} binary operations`}</p>
        </div>
      </div>
    );
  }
}

export default App;

import './App.css';
import React from 'react';
import tableInfo from './data.json';
import $ from 'jquery';
import resize from './colResizable-1.6';
import Sort from './Sorting';
import Filter from './Filter';

class App extends React.Component {
  resize(){
    $(function(){$("table").colResizable({
      liveDrag:true,
      minWidth: 200
    });})
  }

  componentDidMount(){
    this.resize();
  }

  render(){
    return (
      <div>
            <Header/>
            <Table />          
      </div>
    );
  }
}

class Table extends React.Component {
  constructor(){
    super();
    this.getArray = this.getArray.bind(this);
    this.state = {arr: [], current: tableInfo};
  }
  

  updateTable(arr){
    this.setState({current: arr});
  }
  
  getArray (){
    let obj = tableInfo[0];
    for (let i = 0; i<tableInfo.length; i++){
      if (Object.keys(tableInfo[i]).length > Object.keys(obj).length){
        obj = tableInfo[i];
      }
    }
    this.setState({arr: Object.keys(obj)});
  }

  componentDidMount(){
    this.getArray();
  }

  render(){
    return (
      <table id="table">
          <thead>
            <tr>
              {this.state.arr.map(item =>(
                  <th key={item}>
                    <div>{item}
                      <Sort orig={tableInfo} arr={this.state.current} column={item} func={this.updateTable.bind(this)} />
                      <Filter orig={tableInfo} arr={this.state.current} column={item} func={this.updateTable.bind(this)} />
                    </div>
                  </th>
              ))}
            </tr>
          </thead>
          <tbody id="table__body">
              {this.state.current.map(item =>(
                <tr>
                  <th>{item.id}</th>
                  <th>{item.Name}</th>
                  <th>{item.Age}</th>
                  <th>{item.phone}</th>
                  <th>{item.mail}</th>
                </tr>  
              ))}
          </tbody>
        </table>
    );
  }
}

class Header extends React.Component {
  render(){
    return (
      <div id="header">
        <h1 className="table__title">Таблица</h1>
      </div>
    );
  }
}



export default App;

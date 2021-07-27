import './App.css';
import React from 'react';
import tableInfo from './data.json';
import $ from 'jquery';
import resize from './components/colResizable-1.6';
import Header from './components/header';
import Table from './components/table';


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
            <Table tableInfo={tableInfo}/>          
      </div>
    );
  }
}

export default App;

import './App.css';
import React from 'react';
import tableInfo from './data.json';
import $ from 'jquery';
import resize from './colResizable-1.6';
import loupe from './loupe.svg';
import sortImg from './arrow-down.svg';


class App extends React.Component {
  resize(){
    $(function(){$("table").colResizable({
      liveDrag:true,
      minWidth: 200
    });})
  }
  render(){
    return (
      <div>
            <Header/>
            <Table />
            {this.resize()}
            
      </div>
    );
  }
}

class Table extends React.Component {
  render(){
    return (
      <table id="table">
          <thead>
            <tr>
              <th>
                <div>id
                <button className="sort" id="sort-num"><img id="sort" className="sort-img-none" src={sortImg}></img></button>
                <button id="filter"><img id="filter-img" src={loupe}></img></button>
                </div>
                <div className="filter__input-wrapper--hidden">
                  <div className="filter__input-close">X</div>
                  <input className="filter__input" id="input-0" placeHolder="поиск" type="text"></input>
                </div>
              </th>
              <th>
                <div>Name
                <button className="sort" id="sort-let"><img id="sort" className="sort-img-none" src={sortImg}></img></button>
                <button id="filter"><img id="filter-img" src={loupe}></img></button>
                </div>
                <div className="filter__input-wrapper--hidden">
                  <div className="filter__input-close">X</div>
                  <input className="filter__input" id="input-1" placeHolder="поиск" type="text"></input>
                </div>
              </th>
              <th>
                <div>Age
                <button className="sort" id="sort-let"><img id="sort" className="sort-img-none" src={sortImg}></img></button>
                <button id="filter"><img id="filter-img" src={loupe}></img></button>
                </div>
                <div className="filter__input-wrapper--hidden">
                  <div className="filter__input-close">X</div>
                  <input className="filter__input" id="input-2" placeHolder="поиск" type="text"></input>
                </div>
              </th>
              <th>
                <div>phone
                <button className="sort" id="sort-num"><img id="sort" className="sort-img-none" src={sortImg}></img></button>
                <button id="filter"><img id="filter-img" src={loupe}></img></button>
                </div>
                <div className="filter__input-wrapper--hidden">
                  <div className="filter__input-close">X</div>
                  <input className="filter__input" id="input-3" placeHolder="поиск" type="text"></input>
                </div>
              </th>
              <th>
                <div>mail
                <button className="sort" id="sort-let"><img id="sort" className="sort-img-none" src={sortImg}></img></button>
                <button id="filter"><img id="filter-img" src={loupe}></img></button>
                </div>
                <div className="filter__input-wrapper--hidden">
                  <div className="filter__input-close">X</div>
                  <input className="filter__input" id="input-4" placeHolder="поиск" type="text"></input>
                </div>
              </th>
            </tr>
          </thead>
          <tbody id="table__body">
              {tableInfo.map(item =>(
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

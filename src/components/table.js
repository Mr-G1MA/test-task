import Sort from './Sorting';
import Filter from './Filter';
import React from 'react';

class Table extends React.Component {
  constructor(props){
    super(props);
    this.getArray = this.getArray.bind(this);
    this.updatePrevArr = this.updatePrevArr.bind(this);
    this.updateTable = this.updateTable.bind(this);
    this.state = {prevArr: this.props.tableInfo, arr: [], current: this.props.tableInfo};
  }
  

  updateTable(arr){
    this.setState({current: arr});
  }

  updatePrevArr(){
    this.setState({prevArr: this.state.current});
  }
  
  getArray (){
    let obj = this.props.tableInfo[0];
    for (let i = 0; i<this.props.tableInfo.length; i++){
      if (Object.keys(this.props.tableInfo[i]).length > Object.keys(obj).length){
        obj = this.props.tableInfo[i];
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
                      <Sort prevArr={this.state.prevArr} orig={this.props.tableInfo} arr={this.state.current} column={item} updateArr={this.updatePrevArr} func={this.updateTable.bind(this)} />
                      <Filter prevArr={this.state.prevArr} orig={this.props.tableInfo} arr={this.state.current} column={item} updateArr={this.updatePrevArr} func={this.updateTable.bind(this)} />
                    </div>
                  </th>
              ))}
            </tr>
          </thead>
          <tbody id="table__body">
              {this.state.current.map(item =>(
                <tr key={item.id}>
                  {this.state.arr.map(col =>(
                    <th>{item[col]}</th>
                  ))}
                </tr>  
              ))}
          </tbody>
        </table>
    );
  }
}

export default Table;
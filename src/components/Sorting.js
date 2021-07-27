import React from 'react';
import sortImg from '../arrow-down.svg';
let counter = 0;

class sort extends React.Component {
  
  constructor(props){
    super(props);
    this.sortFunc = this.sortFunc.bind(this);
  }
  
  /* сортировка по убыванию */
  sortLeast(a,b){
    try {
      if (JSON.parse(a) > JSON.parse(b)) {
        return 1;
      }
      if (JSON.parse(a) < JSON.parse(b)) {
        return -1;
      }
      return 0;
    }
    catch (e) {
      if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      }
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      }
      return 0;
    }
  }
  
  /* сортировка по возрастанию */
  sortOver(a,b){
    try {
      if (JSON.parse(a) < JSON.parse(b)) {
        return 1;
      }
      if (JSON.parse(a) > JSON.parse(b)) {
        return -1;
      }
      return 0;
    }
    catch (e) {
      if (a.toLowerCase() < b.toLowerCase()) {
        return 1;
      }
      if (a.toLowerCase() > b.toLowerCase()) {
        return -1;
      }
      return 0;
    }
  }

  sortFunc(e){
    
    let sortingArr = [];
    let tempArr = this.props.arr;
    let sortedArr = [];
    let name = this.props.column;
    let buttons = document.querySelectorAll("#sort-btn");
    let filtersNum = 0;
    let filters = document.querySelectorAll(".filter__input");

    for (let i = 0; i<filters.length; i++){
      if (filters[i].value!==''){
        filtersNum++;
      }
    }

    for (let i = 0; i<tempArr.length; i++){
      sortingArr.push(tempArr[i][name]);
    }

    for (let i = 0; i<buttons.length; i++){
      if(e.target.childNodes.length == 0){
        if (buttons[i]!==e.target.closest("button")){
          buttons[i].className = "sort-img-none";
        }
      }
      else{
        if (buttons[i]!==e.target){
          buttons[i].className = "sort-img-none";
        }
      }
    }

    if (e.target.childNodes.length == 0){
      if (e.target.closest("button").className == "sort-img-none"){
        this.props.updateArr();
        sortingArr.sort(this.sortLeast);
        e.target.closest("button").className = "sort-img-down";
        counter++;
      }
      else if (e.target.closest("button").className == "sort-img-down"){
        sortingArr.sort(this.sortOver);
        e.target.closest("button").className = "sort-img-up";
      }
      else if (e.target.closest("button").className == "sort-img-up"){
        if (filtersNum !== 0){
          e.target.closest("button").className = "sort-img-none";
          counter = 0;
        }
        else{
          sortingArr = [];
          for (let i = 0; i<this.props.orig.length; i++){
            sortingArr.push(this.props.orig[i][name]);
          }
          e.target.closest("button").className = "sort-img-none";
        }
      }
    }
    else{
      if (e.target.className == "sort-img-none"){
        this.props.updateArr();
        sortingArr.sort(this.sortLeast);
        e.target.className = "sort-img-down";
        counter++;
      }
      else if (e.target.className == "sort-img-down"){
        sortingArr.sort(this.sortOver);
        e.target.className = "sort-img-up";
      }
      else if (e.target.className == "sort-img-up"){
        if (filtersNum !== 0){
          e.target.className = "sort-img-none";
          counter = 0;
        }
        else{
          sortingArr = [];
          for (let i = 0; i<this.props.orig.length; i++){
            sortingArr.push(this.props.orig[i][name]);
          }
          e.target.className = "sort-img-none";
        }
      }
    }
    
    for (let i = 0; i<sortingArr.length; i++){
      for (let x = 0; x<tempArr.length; x++){
        if((tempArr[x][name]==sortingArr[i])&&(JSON.stringify(sortedArr).indexOf(JSON.stringify(tempArr[x]))==-1)){
          sortedArr.push(tempArr[x]);
          break;
        }
      }
    }
    if(counter == 0){
      this.props.func(this.props.prevArr);
    }
    else{
      this.props.func(sortedArr);
    }
  }

  render(){
    return(
      <button onClick={(e) => this.sortFunc(e)} className="sort-img-none" id="sort-btn"><img id="sort" src={sortImg}></img></button>
    );
  }
}

export default sort;
import React from 'react';
import loupe from '../loupe.svg';

class filter extends React.Component {
  constructor(props){
    super(props);

    this.filter = this.filter.bind(this);
    this.open = this.open.bind(this);
    this.makeArr = this.makeArr.bind(this);
  }

  open(e){
    let inputs = document.querySelectorAll(".filter__input-wrapper--active");
    let sorts = document.querySelectorAll("#sort-btn");
    let filters = document.querySelectorAll(".filter__input");
    let filtersNum = 0;

    for (let i = 0; i<filters.length; i++){
      if (filters[i].value!==''){
        filtersNum++;
      }
    }

    for (let i = 0; i<inputs.length; i++){
      if(e.target.childNodes.length == 0){
        if (inputs[i]!==e.target.closest("button").nextSibling){
          inputs[i].className = "filter__input-wrapper--hidden";
        }
      }
      else{
        if (inputs[i]!==e.target.nextSibling){
          inputs[i].className = "filter__input-wrapper--hidden";
        }
      }
    }

    if(e.target.childNodes.length == 0){
      e.target.closest("button").nextSibling.className = "filter__input-wrapper--active";
    }
    else{
      e.target.nextSibling.className = "filter__input-wrapper--active";
    }

    for (let i = 0; i<sorts.length; i++){
      if (filtersNum == 0){
        sorts[i].className = "sort-img-none";
        this.props.func(this.props.orig);
      }
      else{
        sorts[i].className = "sort-img-none";
        this.filter();
      }
    }
  }

  componentDidMount(){
    document.addEventListener('click', (e)=>{
      if ((e.target.className == "filter__input-close"||((e.target.className !== "filter__input-wrapper--active")&&(e.target.className !== "filter__input")))&&(document.querySelector(".filter__input-wrapper--active"))&&(e.target.id !=="filter-img")&&(e.target.id !=="filter")){
        let input = document.querySelector(".filter__input-wrapper--active");
        input.className = "filter__input-wrapper--hidden";
      }
    })
  }

  makeArr(temp, filter, name){
    let arr = [];
    for (let i = 0; i<temp.length; i++){
      if (typeof temp[i][name] !== 'undefined'){
        if(typeof temp[i][name] == 'number'){
          if (JSON.stringify(temp[i][name]).includes(filter)){
            arr.push(temp[i]);
          }
        }
        else if (typeof temp[i][name] == 'string'){
          if (temp[i][name].toLowerCase().includes(filter.toLowerCase())){
            arr.push(temp[i]);
          }
        }
      }
    }
    return arr;
  }

  filter(e){
    let filtering = 0;
    let filteredArr = [];
    let a = 0;
    let filters = document.querySelectorAll(".filter__input");
    
    for (let i = 0; i<filters.length; i++){
      let name = filters[i].closest("th").textContent;
      name = name.replace(/X/g, '');

      if(filters[i].value !== ''){
        if(a==0){
          filteredArr = this.makeArr(this.props.orig, filters[i].value, name);
          this.props.func(filteredArr);
        }
        else{
          let tempArr = filteredArr;
          filteredArr = this.makeArr(tempArr, filters[i].value, name);
          this.props.func(filteredArr);
        }
        a++;
      }
      else{
        filtering++;
      }
    }

    if (filtering == filters.length){
      filteredArr = this.props.orig;
      this.props.func(filteredArr);
    }
  }

  render(){
    return(
      <div>
        <button onClick={(e) => this.open(e)} id="filter"><img id="filter-img" src={loupe}></img></button>
        <div className="filter__input-wrapper--hidden">
          <div className="filter__input-close">X</div>
          <input onInput={(e) => this.filter(e)} className="filter__input" id={`input-${this.props.column}`} placeholder="поиск" type="text"></input>
        </div>
      </div>
    );
  }
}

export default filter;
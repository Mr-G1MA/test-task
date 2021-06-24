import React from 'react';
import tableInfo from './data.json';
import ReactDOM from 'react-dom';

class filter extends React.Component {
  constructor(element){
    super();
    this.element = element;
    let filter ='';

    this.element.addEventListener('click', (e)=>{
      e.preventDefault();
      
      if (e.target.id == "filter"||e.target.id == "filter-img"){
        let arr = tableInfo;
        let filteringArr = [];
        let tempArr = [];
        let emptyInput = 0;
        const headerArr = document.querySelectorAll("thead th");
        let filterNum = 0;
        const col = e.target.closest("th");
        const filterInput = col.querySelector(".filter__input-wrapper--hidden");


        /* определение номера столбца */
        for (let i=0; i<headerArr.length; i++) {
          if (col.textContent == headerArr[i].textContent){
            filterNum = i;
          }
        }

        if (document.querySelector(".filter__input-wrapper--active")){
          document.querySelector(".filter__input-wrapper--active").className = "filter__input-wrapper--hidden";
          filterInput.className = "filter__input-wrapper--active";
          InputListener();
        }
        else{
          filterInput.className = "filter__input-wrapper--active";
          InputListener();
        }
        

        /* Считывание данных из input */
        function InputListener () {
          if (document.querySelector(".filter__input-wrapper--active")){
            document.querySelector(`#input-${filterNum}`).addEventListener('input', function () {
              filter = this.value;
              update(filterNum);
            });      
          }
        }

        /* функция заполнения массива требуемыми значениями из JSON */
        function makeArr(object, name){ 
          if (filter == ""||filter == " "){
            filteringArr.push(object[name]);
          }
          else if (typeof object[name] !== 'undefined'){
            if (typeof object[name] == 'string'){
              if (object[name].toLowerCase().startsWith(filter.toLowerCase())){
                filteringArr.push(object[name]);
              }
            }
            else if (typeof object[name] == 'number'){
              if (JSON.stringify(object[name]).startsWith(filter)){
                filteringArr.push(object[name]);
              }
            }
          }
        }

        /* обновление таблицы */

        function update (filterNum) {
          for (let i = 0; i<headerArr.length; i++){
            if (headerArr[i].querySelector(".filter__input").value == ""){
              emptyInput++;
            }
          }
          if ((headerArr.length - emptyInput !== 1)&&(headerArr.length - emptyInput !== 0)){
            arr = [];
            let bodyTr = document.querySelectorAll("tbody tr");
            for (let i=0; i<bodyTr.length;i++){
              let obj = {};
              let bodyTh = bodyTr[i].querySelectorAll("th");
              for (let x = 0; x<5; x++){
                obj[headerArr[x].querySelector("div").textContent]= bodyTh[x].textContent;
              }
              arr.push(obj);
              
            }
          }
          emptyInput = 0;
          
          if (filterNum == 0){
            for(let i = 0; i<arr.length; i++){
              makeArr(arr[i], "id");
            }
            for (let i=0; i<filteringArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((filteringArr[i]==arr[x].id)||(filteringArr[i]==""&&arr[x].id==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
          }
          else if (filterNum == 1){
            for(let i = 0; i<arr.length; i++){
              makeArr(arr[i], "Name");
            }
            for (let i=0; i<filteringArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((filteringArr[i]==arr[x].Name)||(filteringArr[i]==""&&arr[x].Name==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
          }
          else if (filterNum == 2){
            for(let i = 0; i<arr.length; i++){
              makeArr(arr[i], "Age");
            }
            for (let i=0; i<filteringArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((filteringArr[i]==arr[x].Age)||(filteringArr[i]==""&&arr[x].Age==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
          }
          else if (filterNum == 3){
            for(let i = 0; i<arr.length; i++){
              makeArr(arr[i], "phone");
            }
            for (let i=0; i<filteringArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((filteringArr[i]==arr[x].phone)||(filteringArr[i]==""&&arr[x].phone==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
          }
          else if (filterNum == 4){
            for(let i = 0; i<arr.length; i++){
              makeArr(arr[i], "mail");
            }
            for (let i=0; i<filteringArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((filteringArr[i]==arr[x].mail)||(filteringArr[i]==""&&arr[x].mail==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
          }
          for (let i = 0; i<headerArr.length; i++){
            if (headerArr[i].querySelector(".filter__input").value == ""){
              emptyInput++;
            }
          }

          if (emptyInput == headerArr.length){
            tempArr=tableInfo;
          }

          ReactDOM.render(
            tempArr.map(item =>(
              <tr >
                <th>{item.id}</th>
                <th>{item.Name}</th>
                <th>{item.Age}</th>
                <th>{item.phone}</th>
                <th>{item.mail}</th>
              </tr>  
            )),
            document.getElementById('table__body')
            );
            if (filteringArr.length == arr.length){
              let anotherSortImg = document.querySelectorAll("#sort");
              for (let i = 0; i<anotherSortImg.length; i++){
                anotherSortImg[i].className = "sort-img-none";
              }
            }
          emptyInput = 0;
          tempArr = [];
          filteringArr = [];
        }
      }
    })

    /* обработчик кликов для закрытия поиска */

    document.addEventListener('click', (e)=>{
      if ((e.target.className == "filter__input-close"||((e.target.className !== "filter__input-wrapper--active")&&(e.target.className !== "filter__input")))&&(document.querySelector(".filter__input-wrapper--active"))&&(e.target.id !=="filter-img")&&(e.target.id !=="filter")){
        let input = document.querySelector(".filter__input-wrapper--active");
        input.className = "filter__input-wrapper--hidden"
      }
    })


  }
}

export default filter;
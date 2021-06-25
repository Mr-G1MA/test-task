import React from 'react';
import tableInfo from './data.json';
import ReactDOM from 'react-dom';

class sort extends React.Component {
  constructor(element){
    super();
    this.element = element;

    /* сортировка по убыванию */
    function sortLeast(a,b){
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
    function sortOver(a,b){
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

    this.element.addEventListener('click', (e)=>{
      e.preventDefault();
      if (e.target.className == "sort"||e.target.id == "sort"){
        let arr = tableInfo;
        const colNum = e.target.closest("th");
        const headerArr = document.querySelectorAll("thead th");
        const sortImg = colNum.querySelector("#sort");
        const anotherSortImg = document.querySelectorAll("#sort");
        let sortNum = 0;
        let sortingArr = [];
        let tempArr = [];

        for (let i=0; i<headerArr.length; i++) {
          if (colNum.textContent == headerArr[i].textContent){
            sortNum = i;
          }
        }
          
        if (sortNum == 0){
          let tr = document.querySelectorAll("tbody tr");

          for (let i=0; i<tr.length; i++) {
            let th = tr[i].querySelectorAll("th");
            sortingArr.push(th[0].textContent);
          }
          console.log(sortingArr);
          if (sortImg.className == "sort-img-none"){
            sortingArr.sort(sortLeast);  
            for (let i=0; i<sortingArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((sortingArr[i]==arr[x].id)||(sortingArr[i]==""&&arr[x].id==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
          }
          else if (sortImg.className == "sort-img-down"){
            sortingArr.sort(sortOver);
            for (let i=0; i<sortingArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((sortingArr[i]==arr[x].id)||(sortingArr[i]==""&&arr[x].id==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
          }
          else{
            for (let i=0; i<sortingArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((sortingArr[i]==arr[x].id)||(sortingArr[i]==""&&arr[x].id==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
            if (sortingArr.length == arr.length){
              tempArr = arr;
            }
          }

        }
        else if (sortNum == 1){ 
          let tr = document.querySelectorAll("tbody tr");

          for (let i=0; i<tr.length; i++) {
            let th = tr[i].querySelectorAll("th");
            sortingArr.push(th[1].textContent);
          }

          if (sortImg.className == "sort-img-none"){
            sortingArr.sort(sortLeast);  
            for (let i=0; i<sortingArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((sortingArr[i]==arr[x].Name)||(sortingArr[i]==""&&arr[x].Name==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
          }
          else if (sortImg.className == "sort-img-down"){
            sortingArr.sort(sortOver);
            for (let i=0; i<sortingArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((sortingArr[i]==arr[x].Name)||(sortingArr[i]==""&&arr[x].Name==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
          }
          else{
            for (let i=0; i<sortingArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((sortingArr[i]==arr[x].Name)||(sortingArr[i]==""&&arr[x].Name==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
            if (sortingArr.length == arr.length){
              tempArr = arr;
            }
          }
        }
        else if (sortNum == 2){
          let tr = document.querySelectorAll("tbody tr");

          for (let i=0; i<tr.length; i++) {
            let th = tr[i].querySelectorAll("th");
            sortingArr.push(th[2].textContent);
          }

          if (sortImg.className == "sort-img-none"){
            sortingArr.sort(sortLeast);  
            for (let i=0; i<sortingArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((sortingArr[i]==arr[x].Age)||(sortingArr[i]==""&&arr[x].Age==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
          }
          else if (sortImg.className == "sort-img-down"){
            sortingArr.sort(sortOver);
            for (let i=0; i<sortingArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((sortingArr[i]==arr[x].Age)||(sortingArr[i]==""&&arr[x].Age==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
          }
          else{
            for (let i=0; i<sortingArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((sortingArr[i]==arr[x].Age)||(sortingArr[i]==""&&arr[x].Age==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
            if (sortingArr.length == arr.length){
              tempArr = arr;
            }
          } 
        }
        else if (sortNum == 3){
          let tr = document.querySelectorAll("tbody tr");

          for (let i=0; i<tr.length; i++) {
            let th = tr[i].querySelectorAll("th");
            sortingArr.push(th[3].textContent);
          }

          if (sortImg.className == "sort-img-none"){
            sortingArr.sort(sortLeast);  
            for (let i=0; i<sortingArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((sortingArr[i]==arr[x].phone)||(sortingArr[i]==""&&arr[x].phone==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
          }
          else if (sortImg.className == "sort-img-down"){
            sortingArr.sort(sortOver);
            for (let i=0; i<sortingArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((sortingArr[i]==arr[x].phone)||(sortingArr[i]==""&&arr[x].phone==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
          }
          else{
            for (let i=0; i<sortingArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((sortingArr[i]==arr[x].phone)||(sortingArr[i]==""&&arr[x].phone==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
            if (sortingArr.length == arr.length){
              tempArr = arr;
            }
          } 
        }
        else {
          let tr = document.querySelectorAll("tbody tr");

          for (let i=0; i<tr.length; i++) {
            let th = tr[i].querySelectorAll("th");
            sortingArr.push(th[4].textContent);
          }

          if (sortImg.className == "sort-img-none"){
            sortingArr.sort(sortLeast);  
            for (let i=0; i<sortingArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((sortingArr[i]==arr[x].mail)||(sortingArr[i]==""&&arr[x].mail==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
          }
          else if (sortImg.className == "sort-img-down"){
            sortingArr.sort(sortOver);
            for (let i=0; i<sortingArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((sortingArr[i]==arr[x].mail)||(sortingArr[i]==""&&arr[x].mail==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
          }
          else{
            for (let i=0; i<sortingArr.length; i++) {
              for (let x = 0; x<arr.length; x++){
                if (((sortingArr[i]==arr[x].mail)||(sortingArr[i]==""&&arr[x].mail==null))&&(JSON.stringify(tempArr).indexOf(JSON.stringify(arr[x]))==-1)){
                  tempArr.push(arr[x]);
                  break;
                }
              }
            }
            if (sortingArr.length == arr.length){
              tempArr = arr;
            }
          }
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
        arr = tempArr;
        tempArr = [];
        sortingArr = [];
        if (sortImg.className == "sort-img-none"){
          sortImg.className = "sort-img-down";
        }
        else if (sortImg.className == "sort-img-down"){
          sortImg.className = "sort-img-up";
        }
        else{
          sortImg.className = "sort-img-none";
        }
        for (let i=0; i<anotherSortImg.length; i++){
          if (i!==sortNum){
            anotherSortImg[i].className = "sort-img-none";
          }
        }
      }
    })
  }
}

export default sort;
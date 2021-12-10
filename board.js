import { queries } from "./mini_backend.js";


window.onload = function(){
  updateHTML()
}



async function createCard(divId) {
  const parentContainer = document.getElementById(divId);

      parentContainer.innerHTML = "";

  const allTasks = await queries.getAllTasks();  
  

  for (let task of allTasks ) {
    
    // const name = queries[i];
    // const status = queries[i];
    // content.innerHTML +=

    const card =  `<div class="card">
    ${task.name} <br>
    ${task.status}<br>

    </div>`;
    // id index entspricht 
    parentContainer.innerHTML += card;
  }
}


async function change(dvId){
  // event drop event vollzogen wurde 
    const update = await queries.updateTask()

    // create card()

}



//Drag & Drop funktionen

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {

  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


function updateHTML() {

  createCard("open")

  // allowDrop()
  // drag()
  // drop()

  // document.getElementById('open').innerHTML = '';
  // for (let i = 0; i < open.length; i++) {
  //   const element = open[i];
  //   document.getElementById('open').innerHTML = generateTodoHTML(element);

  // }


  // // Kategorie close



  // document.getElementById('closed').innerHTML = '';


  // for (let i = 0; i < closed.length; i++) {
  //   const element = closed[i];
  //   document.getElementById('closed').innerHTML = generateTodoHTML(element);

  // }
  // // Kategorie close



  // document.getElementById('onwork').innerHTML = '';


  // for (let i = 0; i < closed.length; i++) {
  //   const element = closed[i];
  //   document.getElementById('onwork').innerHTML = generateTodoHTML(element);

  // }

}

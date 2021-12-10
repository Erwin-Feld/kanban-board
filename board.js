
function createCard() {


  import { queries } from "./mini_backend.js";

  for (let i = 0; i < queries.length; i++) {
    const name = queries[i];
    const status = queries[i];
    content.innerHTML +=

      `<div class="card">
    ${name} <br>
    ${status}<br>
    
   
    </div>`;
  }
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

  document.getElementById('open').innerHTML = '';
  for (let i = 0; i < open.length; i++) {
    const element = open[i];
    document.getElementById('open').innerHTML = generateTodoHTML(element);

  }


  // Kategorie close



  document.getElementById('closed').innerHTML = '';


  for (let i = 0; i < closed.length; i++) {
    const element = closed[i];
    document.getElementById('closed').innerHTML = generateTodoHTML(element);

  }
  // Kategorie close



  document.getElementById('onwork').innerHTML = '';


  for (let i = 0; i < closed.length; i++) {
    const element = closed[i];
    document.getElementById('onwork').innerHTML = generateTodoHTML(element);

  }

}

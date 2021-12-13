import { queries } from "./mini_backend.js";

function init(){

  let firstdiv = document.getElementById("open");
  firstdiv.addEventListener("ondragover", ()=> {
    allowDrop()
  })

}




// Karte erzeugen
window.onload =createCard();
async function createCard() {
  const parentContainer = document.getElementById('open');

  parentContainer.innerHTML = "";

  const filteredTask = await queries.getTask("active");


  for (let task of filteredTask) {

    

    let card= `<div draggable="true" ondragstart="startDragging(${task[i]);" class="card">
    ${task.taskName} <br>
    ${task.status}<br>

    </div>`;
    // id index entspricht 
    parentContainer.innerHTML += card;
  }
}




let currentDragelement;

//Drag & Drop funktionen

function startDragging(id){

  currentDragelement =id;
}

function moveTo(status){
 task[currentDragelement]['status'] = status;
 updateHTML();

}

function allowDrop(ev) {
  console.log(ev)
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

  let open = getTask.filter(t => t['status'] == 'open');

  document.getElementById('open').innerHTML = '';
  for (let i = 0; i < open.length; i++) {
    const element = open[i];
    document.getElementById('open').innerHTML = generateTodoHTML(element);
  }


  // // Kategorie close

  let closed = getTask.filter(t => t['status'] == 'closed');

  document.getElementById('closed').innerHTML = '';


  for (let i = 0; i < closed.length; i++) {
    const element = closed[i];
    document.getElementById('closed').innerHTML = generateTodoHTML(element);

  }
  // Kategorie close

  let onwork = getTask.filter(t => t['status'] == 'onwork');

  document.getElementById('onwork').innerHTML = '';


  // Kategorie onwork

  for (let i = 0; i < onwork.length; i++) {
    const element = onwork[i];
    document.getElementById('onwork').innerHTML = generateTodoHTML(element);

  }

}
function  generateTodoHTML(element){
  return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="title">${element['title']}></div>`
}



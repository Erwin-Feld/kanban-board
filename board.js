let todos = [];

let currentDraggedElement;

function updateHTML() {


  // Kategorie open
  let open = todos.filter(t => t['category'] == 'open');


  document.getElementById('open').innerHTML = '';


  for (let i = 0; i < open.length; i++) {
    const element = open[i];
    document.getElementById('open').innerHTML = generateTodoHTML(element);

  }


  // Kategorie close
  let open = todos.filter(t => t['category'] == 'closed');


  document.getElementById('closed').innerHTML = '';


  for (let i = 0; i < closed.length; i++) {
    const element = closed[i];
    document.getElementById('closed').innerHTML = generateTodoHTML(element);

  }
  // Kategorie close
  let open = todos.filter(t => t['category'] == 'onwork');


  document.getElementById('onwork').innerHTML = '';


  for (let i = 0; i < closed.length; i++) {
    const element = closed[i];
    document.getElementById('onwork').innerHTML = generateTodoHTML(element);

  }
}


//Elemente in HTML



function generateTodoHTML() {
  return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="todo"> ${element['title']}</div>`
}
function startDragging(id) {

  currentDraggedElement = id;
}

// zur Kategorie bewegen 
function moveTo(category) {

  todos[currentDraggedElement]['category'] = category;
  updateHTML();

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
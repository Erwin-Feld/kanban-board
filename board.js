// Karte erzeugen




//async function createCard() {
//const parentContainer = document.getElementById('open');

//parentContainer.innerHTML = "";


function getCard() {



    for (let i = 0; i < allTasks.length; i++) {
        card = task[i];

    } {



        card = `<div draggable="true" ondragstart="startDragging(${task.id})" class="card text-white bg-success mb-3">
  
    ${task.taskName} <br>
    ${task.status}<br>

    </div>`;
        // id index entspricht 
        //parentContainer.innerHTML += card;
    }
}





let currentDragelement;

//Drag & Drop funktionen

function startDragging(id) {

    currentDragelement = id;
}

function moveTo(category) {
    task[currentDragelement]['category'] = category;
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

    let open = getTask.filter(t => t['category'] == 'open');

    document.getElementById('open').innerHTML = '';
    for (let i = 0; i < open.length; i++) {
        const element = open[i];
        document.getElementById('open').innerHTML = generateTodoHTML(element);
    }


    // // Kategorie close

    let closed = getTask.filter(t => t['category'] == 'closed');

    document.getElementById('closed').innerHTML = '';


    for (let i = 0; i < closed.length; i++) {
        const element = closed[i];
        document.getElementById('category').innerHTML = generateTodoHTML(element);

    }
    // Kategorie close

    let onwork = getTask.filter(t => t['category'] == 'onwork');

    document.getElementById('onwork').innerHTML = '';


    // Kategorie onwork

    for (let i = 0; i < onwork.length; i++) {
        const element = onwork[i];
        document.getElementById('onwork').innerHTML = generateTodoHTML(element);

    }

}

function generateTodoHTML(element) {
    return `<div draggable="true" ondragstart="startDragging${task.id})" class="title">${element['title']}></div>`
}
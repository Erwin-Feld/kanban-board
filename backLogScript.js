import { queries } from "./mini_backend.js";

function init(){

    render()


}

window.onload = function(){
    init()
  }
  


async function render(){
    const allTasks = await queries.getAllTasks();
    
    const parentContainer = document.getElementById("tasks-container")
    parentContainer.innerHTML= "";

    for(let task of allTasks){

        const taskCard = `
        <div class="col-md-6 col-lg-3">
            <div class="card ">
              <div class="card-body">
                <h5 class="card-title">${task.taskName}</h5>
                <!-- employee -->
                <p class="card-text mb-1">assigned to: ${task.employee}</p>
                <!-- created -->
                <p class="card-text mb-1">created at ${task.created}</p>

                <p class="card-text mb-1">task status: ${task.status}</p>

                <p class="card-text mb-1">task category: ${task.taskCategory}</p>

                <p class="card-text mb-1">task urgency: ${task.taskUrgency}</p>

                <h6 class="card-title mb-0">Description</h6>
                <p card-text mb-1"> ${task.taskDescription}</p>
              </div>
            </div>
          </div>
       
        `
        parentContainer.innerHTML += taskCard;
    }
}




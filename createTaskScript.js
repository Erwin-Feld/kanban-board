import { queries } from "./mini_backend.js";
import {includeHTML} from "./routing.js"

function init(){
    includeHTML()
    const btn = document.getElementById("submitbtn")
    btn.addEventListener("click", ()=> addTasktoDb())

    // FIXME wieso geht das nur mit prevent default
    /* prevent default */
    var form = document.getElementById("dbSubmit");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
}

window.onload = function(){
    init()
  }
  
  


async function addTasktoDb(){

    const allTasksCount = await queries.getAllTasks()

    const taskId = (allTasksCount.length +1)

    const taskName = document.getElementById("taskName").value

    const taskCreatorName = document.getElementById("taskCreatorName").value

    const taskDescription = document.getElementById("TaskDescription").value

    let taskCategoryValue;
    const taskCategory = document.getElementById("taskCategory")
    const taskCatSelInd = taskCategory.selectedIndex;

    if(taskCatSelInd !== 0){
        taskCategoryValue = taskCategory.options[taskCatSelInd].innerText

    }

    let taskUrgencyValue;
    const taskUrgency = document.getElementById("taskUrgency")
    const taskUrgSelInd = taskUrgency.selectedIndex;

    if(taskUrgSelInd !== 0){
        taskUrgencyValue = taskUrgency.options[taskUrgSelInd].innerText
    }



    // category
    // task description
    // const taskUrgency = document.getElementById("taskCategory").value

    //  ------> 
    // FIXME only adds to db after second click 

    const dto = {
        id: taskId,
        taskName: taskName,
        employee: taskCreatorName,
        created: new Date().toLocaleString(),
        status: "active",
        taskCategory: taskCategoryValue,
        taskUrgency: taskUrgencyValue,
        taskDescription: taskDescription
    }

   try {
       
       return await queries.createTask(dto);

   } catch(error) {
       console.log(error)
   }


}

async function testme() {
    const allTasks = await queries.getAllTasks()
    console.log(allTasks)
  }
  
  testme();
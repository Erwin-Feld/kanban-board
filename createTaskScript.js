import { queries } from "./mini_backend.js";

function init(){
    const btn = document.getElementById("submitbtn")
    btn.addEventListener("click", ()=> addTasktoDb())

    /* prevent default */
//     var form = document.getElementById("dbSubmit");
// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm);
}

window.onload = function(){
    init()
  }
  
  


async function addTasktoDb(){
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


    const dto = {
        taskName: taskName,
        employee: taskCreatorName,
        created: new Date().toLocaleString(),
        status: "active",
        taskCategory: taskCategoryValue,
        taskUrgency: taskUrgencyValue,
        taskDescription: taskDescription
    }

   try {
       
       return queries.createTask(dto);

   } catch(error) {
       console.log(error)
   }


}

async function testme() {
    for (let task of await queries.getTask("active")) {
      console.log(task);
    }
  }
  
  testme();
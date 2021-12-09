import { queries, saveJSONToServer } from "./mini_backend.js";


/* get all tasks */
async function testme(){
    for(let task of await queries.getAllTasks()){
        console.log(task)
    }
}

// testme()

const user = {"id": 0,
"name": "Dirk",
"status": "ACTIVE",
"created": "01:12:2021",
"urgency": "High",
"category": "Managment"

}

/* update task */
async function updateTask(user){
    const allTasks = await queries.getAllTasks();
    allTasks.tasks.push(user);

   
    return saveJSONToServer(allTasks)

    
}



// updateTask(user)

testme()




// async function getPromise(){
//     const promise = await queries.getAllTasks()
//     let x = promise.tasks.push(12)
   
    
//     return  x;
    

// }


// console.log(getPromise())

// console.log(queries.getAllTasks())

// const x = queries.getAllTasks();

// const z = x.push(12);


/* json 

status:

NEW
ACTIVE
FINISHED

 */

/* newly created */
const jsonExample = {

    "tasks": [
        {"id": 0,
        "name": "Dirk",
        "status": "ACTIVE",
        "created": "01:12:2021",
        "urgency": "High",
        "category": "Managment"

    }
    ]

}


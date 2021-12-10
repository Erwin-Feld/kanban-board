import { queries } from "./mini_backend.js";

/* get all tasks */
async function testme() {
  for (let task of await queries.getTask("ACTIVE")) {
    console.log(task);
  }
}

// testme();

const user = {
  id: 1,
  name: "Erwin",
  status: "ACTIVE",
  created: "01:12:2021",
  urgency: "High",
  category: "Managment",
};


/* delete task */
async function testDeleteTask(id){
    queries.deleteTask(id)
}

// testDeleteTask(0)


/* update task */
async function updateTask(user) {
  const allTasks = await queries.getAllTasks();
  allTasks.tasks.push(user);

  return saveJSONToServer(allTasks);
}

async function getThatTask(id, value) {
  const allTasks = await queries.updateTask(id, value);

}

// getThatTask(0, "working")

// sdsddssssssssssssssssss

// updateTask(user)

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
  tasks: [
    {
      id: 0,
      name: "Dirk",
      status: "ACTIVE",
      created: "01:12:2021",
      urgency: "High",
      category: "Managment",
    },
  ],
};

let BASE_SERVER_URL =
  "http://intensivgruppe-4.developerakademie.net/smallest_backend_ever";

/* 
DTO

const user = {"id": 0,
"name": "Dirk",
"status": "ACTIVE",
"created": "01:12:2021",
"urgency": "High",
"category": "Managment"

}

*/

const queries = {
  // cardID id 
  // updatevalue --- div ID 
  updateTask: async function (cardId, updateValue) {
    const cardIdNumber = parseInt(cardId);
    const allTasks = await downloadFromServer();
    const foundTask = allTasks.tasks.find((elm) => elm.id === cardIdNumber);

    const updatedTask = Object.assign(foundTask, { status: updateValue });

    // replace element
    allTasks.tasks.forEach((elm, ind) => {
      if (elm.id === cardIdNumber) {
        elm.status = updateValue;
      }
    });

    return await saveJSONToServer(allTasks);
  },

  /**
   * add a Task Object to DB
   *
   * @param {Object} task
   * @returns
   */
  addTask: async function (task) {
    const allTasks = await downloadFromServer();
    allTasks.tasks.push(task);
    return saveJSONToServer(allTasks);
  },

  /**
   * @param {string} taskStatus  --> insert id of Div     
   * 
   * @returns specific task  
   */
  // Add which task
  // ---    const foundTask = allTasks.tasks.find((elm) => elm.id === cardIdNumber);
  //  return all tasks with div id  
  getTask: async function (taskStatus) {
    const allTasks = await downloadFromServer();
    const filterdTasks = allTasks.tasks.filter(elm => elm.status === taskStatus)
    return filterdTasks;
  },

  /**
   * 
   * @param {String} cardId id of card element 
   * @returns deletes task from database
   */
  deleteTask: async function (cardId) {
    const cardIdNumber = parseInt(cardId);
    const allTasks = await downloadFromServer();

    const taskId = allTasks.tasks.findIndex((item) => item.id === cardIdNumber);

    allTasks.tasks.splice(taskId, 1);
    return await saveJSONToServer(allTasks);
  },
};

async function downloadFromServer() {
  let result = await loadJSONFromServer();
  const jsonFromServer = JSON.parse(result);
  return await jsonFromServer;
}

/**
 * Loads a JSON or JSON Array to the Server
 * payload {JSON | Array} - The payload you want to store
 */

async function loadJSONFromServer() {
  let response = await fetch(
    BASE_SERVER_URL + "/nocors.php?json=database&noache=" + new Date().getTime()
  );
  return await response.text();
}

/**
 * Saves a JSON or JSON Array to the Server
 */
function saveJSONToServer(changes) {
  return new Promise(function (resolve, reject) {
    let xhttp = new XMLHttpRequest();
    let proxy = determineProxySettings();
    let serverURL = proxy + BASE_SERVER_URL + "/save_json.php";
    xhttp.open("POST", serverURL);

    xhttp.onreadystatechange = function (oEvent) {
      if (xhttp.readyState === 4) {
        if (xhttp.status >= 200 && xhttp.status <= 399) {
          resolve(xhttp.responseText);
        } else {
          reject(xhttp.statusText);
        }
      }
    };

    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(changes));
  });
}

function determineProxySettings() {
  return "";

  if (window.location.href.indexOf(".developerakademie.com") > -1) {
    return "";
  } else {
    return "https://cors-anywhere.herokuapp.com/";
  }
}

export { queries };

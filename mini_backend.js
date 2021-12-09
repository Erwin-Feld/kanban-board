let BASE_SERVER_URL = "http://intensivgruppe-4.developerakademie.net/smallest_backend_ever";


 const queries = {
    findTask: function(searchTerm) {
        /* 
        Add 
        searches db for first apearence if that seatchterm
        returns index of that task 
        */

    },
    
    /**
     * add a Task Object to DB
     * 
     * @param {Object} task 
     * @returns 
     */
    addTask: async function(task){
        const allTasks = await downloadFromServer();
        allTasks.tasks.push(task);
        return saveJSONToServer(allTasks)

    },

    /**
     * 
     * @returns all Tasks from DB
     */
    getAllTasks: async function(){
        const {tasks} = await downloadFromServer(); 
        return tasks

    },

    deleteTask: function(key) {
    /* 
    Add 
    delete task by index , gets index deletes that part

        */

        delete jsonFromServer[key];
        return saveJSONToServer();
    }
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
    let response = await fetch(BASE_SERVER_URL + '/nocors.php?json=database&noache=' + (new Date().getTime()));
    return await response.text();

}



/**
 * Saves a JSON or JSON Array to the Server
 */
 function saveJSONToServer(addedTasks) {
    return new Promise(function(resolve, reject) {
        let xhttp = new XMLHttpRequest();
        let proxy = determineProxySettings();
        let serverURL = proxy + BASE_SERVER_URL + '/save_json.php';
        xhttp.open('POST', serverURL);

        xhttp.onreadystatechange = function(oEvent) {
            if (xhttp.readyState === 4) {
                if (xhttp.status >= 200 && xhttp.status <= 399) {
                    resolve(xhttp.responseText);
                } else {
                    reject(xhttp.statusText);
                }
            }
        };

        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify(addedTasks));

    });
}


function determineProxySettings() {
    return '';

    if (window.location.href.indexOf('.developerakademie.com') > -1) {
        return '';
    } else {
        return 'https://cors-anywhere.herokuapp.com/';
    }
}




export {queries, downloadFromServer, saveJSONToServer}
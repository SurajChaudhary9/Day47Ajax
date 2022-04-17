let xmlHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function serverCall(url, methodType,data=null) {
    const xhr = new xmlHttpRequest();
    xhr.onreadystatechange = function () {
        // console.log(result)
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status==201) {
                console.log(xhr.responseText)
            } else {
                console.log("there is some error")
                console.log(xhr.status)
                console.log(xhr.readyState)
            }
        }
    }
    
    xhr.open(methodType, url);
    if(data!=null){
       // set `Content-Type` header
        xhr.setRequestHeader('Content-Type', 'application/json');   
       // pass `params` to `send()` method
        xhr.send(JSON.stringify(data));
    }else{
        xhr.send()
    }    
}

//**************************** GET request**************************
let getURL = "http://localhost:3000/employeeData/1"
let methodType = "GET"
serverCall(getURL, methodType)


//**************************** POST request**************************
let url = "http://localhost:3000/employeeData";
methodType = "POST"

// create a JSON object
const params = {
    "name": "Shubham",
    "age": 22,
    "salary": 12352,
  };

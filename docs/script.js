//verify connection---------|
console.log("It works")
//send alert with message---|

function start(){
    console.log("press logo")
    let key = "10-40-19"
    if (key == "10-40-19"){
        alert("Felicidades Activaste un area secreta.Mueve el mouse para interactuar con el UI")
    }else{
        alert("Something Else")
    }
}

//Prompt Method
function key(){
    console.log("Secure the Vault press")
    let key = prompt("key","**-**-**")
    if (key == "10-40-19"){
        window.open("https://pivanrios.github.io/CourseWork/")

    }else{
        alert("Keep Looking")
    }
}

//here we add the form request
console.log("Page Loaded")
const form = document.querySelector("#form")//select the form
const submitButton = document.querySelector("#submit")//the sumbit
const scriptURL = "http://httpbin.org/post"
console.log("Its working..")

form.addEventListener('submit', e => {//add event is a function?
    submitButton.disabled = true
    e.preventDefault() //apply a method to the function?
    let requestBody = new FormData(form)
    console.log(requestBody)
  //check the variable
    fetch(scriptURL, { method: 'POST', body: requestBody})
        .then(response => {
            alert('Awebooo!!')
            submitButton.disabled = false
            console.log('Success')
            response.json
        })
        .then(data => console.log(data))
        .catch(error => {
            alert('Error!', error.message)
            submitButton.disabled = false
    })
})
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
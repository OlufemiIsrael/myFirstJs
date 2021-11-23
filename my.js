document.getElementById("btn1").onclick= function() {
     document.getElementById ("myImage").src="img/icons8-bulbon.png"
}

document.getElementById("btn").onclick= function() {
    document.getElementById ("myImage").src="img/icons8-bulboff.png"
}

const person = {
    firstName : "Israel",
    lastName : "Olufemi",
    DOB : Date(),
    Details: function() {
        return this.firstName +" "+ this.lastName +" "+ this.DOB
    }
}

    document.getElementById("btn2").onclick= function() {
    document.getElementById("demo").innerHTML = person.Details()
    if ( document.getElementById("demo").innerHTML = person.Details()) {

let button = document.getElementById("btn2")

let counter = 0

button.addEventListener("click", function() {
    let x = counter++;
    alert(x)
})
    }
}


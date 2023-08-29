
// function showname(){
// var nameel = document.getElementById("name").value;
// console.log(nameel);
// console.log("nameel");

// result.innerHTML= `hello`;

// }

function showname() {
    var nameValue = document.getElementById("name").value;
    console.log(nameValue)
    localStorage.setItem("nameValue", nameValue);
    window.location.href = "index2.html"; // Redirect to index2.html
}


function calculateResult(event) {
    event.preventDefault(); // prevent the default form submission behavior
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let fullName = firstName + " " + lastName;
    let nameLength = fullName.replace(/[^a-zA-Z]/g, '').length; // remove non-alphabetic characters and count letters
    let result = nameLength % 2 == 0 ? "win" : "loss";
    document.getElementById("result").innerHTML = "Your result is: " + result;
}
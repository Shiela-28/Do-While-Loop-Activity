// Get password until correct.
let password = ""; 
do {
  password = prompt("Enter your password:");
  if (password !== "password123") {
    console.log("Incorrect, try again.");
  }
} while (password !== "password123"); // Loop until correct password.

// Display access granted message.
console.log("Access granted.");

//https://stackoverflow.com/questions/64454892/looping-prompt-in-javascript-until-condition-is-met
//https://stackoverflow.com/questions/64454892/looping-prompt-in-javascript-until-condition-is-met
//https://www.w3schools.com/js/js_loop_while.asp
//https://www.digitalocean.com/community/tutorials/using-while-loops-and-do-while-loops-in-javascript
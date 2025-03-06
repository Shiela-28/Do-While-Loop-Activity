let password = "";
do {
  password = prompt("Enter your password:");
  if (password !== "password123") {
    console.log("Incorrect, try again.");
  }
} while (password !== "password123");
console.log("Access granted.");
//Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary).


const enteredUsername = "adminUser";
const enteredPassword = "securePassword123";
const role = "admin"; 


const correctUsername = "adminUser";
const correctPassword = "securePassword123";


const isLoginValid = (enteredUsername === correctUsername) && (enteredPassword === correctPassword);


if (!isLoginValid) {
    console.log("Access Denied: Incorrect username or password.");
} else {
    console.log("Login Successful!");

  
    const dashboardMessage = (role === "admin") ? "Opening Admin Dashboard..." : "Opening User Dashboard...";
    console.log(dashboardMessage);
}

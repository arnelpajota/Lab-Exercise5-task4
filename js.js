var password = prompt("Enter your password:");

var lengthFeedback = password.length >= 8 && password.length <= 16 ? "Good length." : "Password length should be between 8 and 16 characters.";

var hasUpperCase = /[A-Z]/.test(password);
var hasLowerCase = /[a-z]/.test(password);
var hasNumber = /\d/.test(password);
var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

var strengthRating = "Weak";
if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
    strengthRating = "Strong";
} else if ((hasUpperCase || hasLowerCase) && hasNumber) {
    strengthRating = "Moderate";
}

console.log("Strength Rating:", strengthRating);
console.log("Feedback:", lengthFeedback);

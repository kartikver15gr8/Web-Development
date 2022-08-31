const fs = require("fs");
let text = fs.readFileSync('hello.txt','utf-8');
text = text.replace("Hello", "Kartikey verma");
console.log("The content of the file 'text' is :");
console.log(text);

console.log("Creating a new file using writefileSync :");
fs.writeFileSync("Kartikey.txt", text);

text = text.replace("How you doin! its me here doing great","We are glad to inform you that you are selected for this internship!")
console.log("The content of the file 'text' is :");
console.log("Creating another new file for greeting regarding approval of the application ");
fs.writeFileSync("approved.txt", text);
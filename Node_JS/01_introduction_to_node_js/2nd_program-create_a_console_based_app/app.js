import process from "process";

// taking user input
const [firstName, lastName, gender, dob, address, phone, email] = process.argv.slice(2);

console.log("User has entered the following details:");
console.log(`Name: ${firstName} ${lastName}
Gender: ${gender}
DOB: ${dob}
Address: ${address}
Phone: ${phone}
Email ID: ${email}
`);

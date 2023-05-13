//4.1 Create a file named "password-generator" et installé nmp avec commande npm install -g npm
// et installé npm install generate-password --save

 // 4.2 Create a function that generates random passwords and console.log() that password.
var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});
console.log(password);



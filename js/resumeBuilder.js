/*$("#main").append("Niket Patil");*/
/*var awesomeThoughts = "I am Niket and I am AWESOME!";
console.log(awesomeThoughts);*/

/*var awesomeThoughts = "I am Niket and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME!","FUN!");
$("#main").append(funThoughts);*/

var name = 'Niket C.Patil';
var formattedName = HTMLheaderName.replace("%data%",name);
var role= 'System Administrator and Consultant Integration Software Engineer';
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var skills = ["Awesomeness","Windows Administrator","HTML & CSS","JavaScript"];
//$("#main").append(skills[0]);

var bio = {
	"name":"Niket Patil", 
	"role":"Sytem Administrator and Consultant Integration Software Engineer" ,
	"contactinfo":7387880660,
};
bio.city = "Badlapur";
var email = ["niket.patil03@gmail.com", "niketp03@gmail.com"];

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.city);
$("#main").append(bio.contactinfo);
$("#main").append(email[0]);
$("#main").append(email[1]);
//$("#main").append(bio.age);
//$("#main").append(bio.Skills);
//$("#main").append(skills[1]);
//$("#main").append(skills[3]);
//$("#main").append(skills[4]);

/*var email ="niket.patil03@yahoo.com";
var newEmail= email.replace("yahoo","gmail");
console.log(email);
console.log(newEmail);*/

/*var text = "audacity";
var copiedText = "audacity".slice(2);
//console.log(copiedText);
var udacityText = "U" + copiedText;
//console.log(udacityText);

var udacityizer = function(string) {
  // Right now, the variable string === "audacity"
  // Manipulate string to make it equal to "Udacity"
  // Your code goes here!
string = "U" + string.slice(2);
  return string;
};
// Did your code work? The line below will tell you!
console.log(udacityizer(text)); */
var today = new Date();

var thisYear = today.getFullYear();
//select footer
var footer = document.querySelector('footer');

//new paragraph in footer
var copyright = document.createElement('p');

//adding elements to the copyright elements
document.querySelector('footer').innerHTML = "@" + "Aigul Y " + thisYear;

//appending copywrite elements to the footer
footer.appendChild(copyright);

//listing skills by creating an array of string values in the var skills
var skills = ["Javascript", "PHP", "HTML", "CSS", "TypeScript", "React", "NodeJs", "Next", "JNextJs", "MySQL", "GIT", "C#"]

//using "DOM selection" selecting the #skills section by ID and store in var skillsSection using getElementbyID
var skillsSection = document.getElementById ("skills");

//using "DOM selection" querry the skillSection to find the <ul> element and store it in var named skillsList
var skillsList = skillsSection.querySelector('ul');

//creating "for" loop to iterate over skills array, starting index 0
for (var i = 0; i<skills.length; i++){
    
    //creating new list of items "li" in the var skill
    var skill = document.createElement('li');
    
    //setting inner text of var skill to the value of Array element
    skill.innerText = skills[i];
    
    //append skill element to the skillsList element
    skillsList.appendChild(skill);
}

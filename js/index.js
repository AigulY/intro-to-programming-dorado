var today = new Date();

var thisYear = today.getFullYear();
//select footer
var footer = document.querySelector('footer');

//new paragraph in footer
var copyright = document.createElement('p');

//adding elements to the copyright elements
document.querySelector('footer').innerHTML = "@ " + "AIGUL YEDIGEYEVA " + thisYear;

//appending copywrite elements to the footer
footer.appendChild(copyright);

//listing skills by creating an array of string values in the var skills
var skills = ["Javascript", "HTML", "CSS", "React", "NodeJs", "MySQL", "GIT", "Next"]

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
};

//HW 4.3

//Handle Message Form Submit
var messageForm = document.getElementById("leave_message");

console.log(messageForm[0], "this is the form");

messageForm.addEventListener("submit", function(event) {
    //to prevent the default refreshing behavior of the "submit" event
    event.preventDefault();

    //Inside the callback function for your event listener, create a new variable for each of the three form fields and retrieve the value from the event
    var theMessageForm = event.target;

    var nameValue = event.target.name.value;
    var emailValue = event.target.email.value;
    var messageValue = event.target.message.value;

    console.log(nameValue);
    console.log(emailValue);
    console.log(messageValue);
    
    //Display Messages in List
    var messageSection = document.getElementById("messages");
    var messageList = messageSection.querySelector("ul");
    var newMessage = document.createElement("li");

    newMessage.innerHTML = `
    <a href="mailto: ${emailValue}"> ${nameValue}</a>
    <span>${messageValue}</span>
    `;

    //adding messages to the list
    messageList.appendChild(newMessage);

    //Create a new <button> element and store it in a variable named removeButton
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "REMOVE";
    removeButton.setAttribute("type", "button")
    removeButton.addEventListener("click", function(event){
        event.preventDefault();
        var entry = removeButton.parentNode;
        entry.remove();

    })
    
    //Append the removeButton to the newMessage element
    newMessage.appendChild(removeButton);
    //Append the newMessage to the messageList element
    messageList.appendChild(newMessage);

    //clear the form
    event.target.reset();
});


//HW #6.1

/*var githubRequest = new XMLHttpRequest();

var githubRequest = new XMLHttpRequest();

githubRequest.open('GET', 'https://api.github.com/users/AigulY/repos');
githubRequest.send();

githubRequest.onload = function(){
    var repositories = JSON.parse(this.response);
    console.log(repositories);

    var projectSection = document.getElementById('projects');

    var projectList = projectSection.querySelector('ul');

    for (i=0; i<repositories.length; i++){
        var project = document.createElement('li');
        project.innerHTML = '<a href="https://www.github.com/AigulY?tab/${repositories[i].name}">' + repositories[i].name + '</a>';
        projectList.appendChild(project);
    }
lesson-6-2
}*/

//HW #6.2

fetch('https://api.github.com/users/AigulY/repos')
.then(response => response.json())
.then(function(repositories){
    console.log(repositories);

    var projectSection = document.getElementById('projects');

    var projectList = projectSection.querySelector('ul');

    for (i=0; i<repositories.length; i++){
        var project = document.createElement('li');
        project.innerHTML = '<a href="https://www.github.com/AigulY?tab/${repositories[i].name}">' + repositories[i].name + '</a>';
        projectList.appendChild(project);
    }
})
.catch((error) => {
    console.error("Error:", error);
});






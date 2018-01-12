var skills = [
    { name: "HTML5", level: 7},
    { name: "CSS3", level: 5},
    { name: "JavaScript", level: 10},
    { name: "ReactJS", level: 8 },
    { name: "AngularJS", level: 8 }
];

function createSkillsBlock(skills) {
    var ul = document.createElement('ul');
    skills.forEach(function (item) {
        var blackCircle = "&#9679".repeat([item.level]),
            grayCircle = "&#9675".repeat(10 - [item.level]),
            li = document.createElement('li');
        li.innerHTML = "<h2>" + item.name + "</h2>" +  blackCircle + grayCircle;
        ul.appendChild(li);
    });
    document.getElementsByClassName('skills')[0].appendChild(ul);
}

createSkillsBlock(skills);
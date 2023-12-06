const project = ["3-button-project", "cat-photos", "app-landing-page", "calculator", 
"final-project", "technical-document", "free-code-camp", "The-newyork-times"," newtribute"," tribute-page"]
let technologies = ["HTML", "CSS", "JAVASCRIPT", "c++"]

function updateProjectList () {
const projectList = document.getElementById('projectsList')
projectList.innerHTML = ''

project.forEach(project => {
    const li = document.createElement('li')
    li.textContent = project
    projectList.appendChild(li)
})
}

function updateTechList() {
const techList =document.getElementById('techList')
techList.innerHTML = ''

technologies.forEach(tech => {
    const li = document.createElement('li')
    li.textContent = tech
    techList.appendChild(li)
})
}

function addTechnology() {
const newTechInput =document.getElementById('newTech')
const newTech = newTechInput.value.trim()

if (newTech !== '') {
    technologies.push(newTech)
    updateTechList()
    newTechInput.value = ''
}
}

updateProjectList()
updateTechList()

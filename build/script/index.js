let buttonDarkMode=document.getElementById("dm-toggle");
let body=document.body;
let nameSection=document.querySelector(".name");
let mainContent=document.querySelector("main");
let educationSection=document.querySelector(".education");
let projectsSection=document.querySelector(".projects");

buttonDarkMode.addEventListener( "click",()=>{
    body.classList.toggle("Dark"),
    nameSection.classList.toggle("Dark"),
    mainContent.classList.toggle("Dark")
    ,educationSection.classList.toggle("Dark"),
    projectsSection.classList.toggle("Dark"),
    buttonDarkMode.classList.toggle("button-dark"),
    buttonDarkMode.textContent=body.classList.contains("Dark")?"🌚":"🌞"
});

try {
    const res = await fetch('/projects.json');
    const p = await res.json()
    const { proyectos } = p;

    const cardContainer = document.querySelector('.card-container')

    proyectos.forEach(project => {
        const card = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h4');
        const description = document.createElement('p')
        const builtFor = document.createElement('p')
        const tech = document.createElement('p')
        const link = document.createElement('p')
        const address = document.createElement('a')

        card.classList.add('card');
        image.classList.add('project_thumbnail');
        name.classList.add('project_name');
        description.classList.add('project_description');
        builtFor.classList.add('project_area');
        tech.classList.add('project_tech');
        link.classList.add('project_link');

        image.src = project.image;
        name.textContent = project.name;
        description.textContent = project.description;
        builtFor.textContent = `This project was built for: ${project.builtFor}`;
        tech.textContent = project.tech;
        address.href = project.github;
        address.textContent = "GitHub"



        card.appendChild(image)
        card.appendChild(name)
        card.appendChild(description)
        card.appendChild(builtFor)
        card.appendChild(tech)

        link.appendChild(address)
        card.appendChild(link)

        cardContainer.appendChild(card)

    });

} catch (e) { console.log(e); }
            
    solicitarProjectos();
    let date=new Date, thisYear=date.getFullYear();
    let putYearHere=document.querySelector("#year");
    putYearHere.textContent=thisYear;


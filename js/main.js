const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];


// stampa le info dall'array alla struttura delle cards fatte con boostrap


const cardContainer = document.getElementById('cardInfo');

for (let infoTeam of team) {
    const nameHTML = `
    <div class="col">
    <div class="card">
        <img src="./img/${infoTeam.image}" class="card-img-top imgSize" alt="...">
        <div class="card-body">
        <h5 class="card-title">${infoTeam.name}</h5>
        <p class="card-text">${infoTeam.role}</p>
        </div>
    </div>
    </div>`;
    console.log(infoTeam.name);
    console.log(infoTeam.role);
    console.log(infoTeam.image);

    cardContainer.innerHTML += nameHTML;
};







// // stampo in console le info dell'arrey

// for (let i = 0; i < team.length; i++) {
//     console.log(team[i].name, team[i].role, team[i].image);
// }



// // stampo in HTML le info del primo elemento nell'array, dovrei stamparli tutti......

// var nomeSoggetto = team[0].name;
// document.querySelector (".nome").innerHTML = nomeSoggetto;

// var cosaFa = team[0].role;
// document.querySelector (".ruolo").innerHTML = cosaFa;

// var foto = team[0].image;
// document.querySelector (".immagine").innerHTML = foto;
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



// stampo in console le info dell'arrey

for (let i = 0; i < team.length; i++) {
    console.log(team[i].name, team[i].role, team[i].image);
}



// stampaNomi.innerHTML = slidesHtml;
var nomeSoggetto = team.name

document.querySelector (".stampa").innerHTML = team[i].name;





    // // Il tuo array
    // var mioArray = [1, 2, 3, 4, 5];

    // // Seleziona l'elemento HTML con id "arrayOutput"
    // var outputDiv = document.getElementById("arrayOutput");

    // // Ottieni il primo elemento dell'array (indice 0)
    // var primoElemento = mioArray[0];
'use strict';


const catList = document.querySelector('.list');
const plusButton = document.querySelector('.js-btn-add');
const buttonAdd = document.querySelector('.js-button-add');
const cancelButton = document.querySelector('.button-cancel');

const plusForm = document.querySelector('.js-new-form');
const inputUrl = document.querySelector('.js-input-url');
const inputName = document.querySelector('.js-input-name');
const inputRaza = document.querySelector('.js-input-raza');
const inputDescription = document.querySelector('.js-input-description');

const searchButton = document.querySelector('.js_button-search');

const descriptionText = document.querySelector('.js_in_search_desc');
const razaText = document.querySelector('.js-raza');

const kittenData1 = {
    img: 'https://dev.adalab.es/gato-siames.webp', 
    name: 'Anastacio',
    race: 'Siamés',
    desc: 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente'
};

const kittenData2 = {
    img: 'https://dev.adalab.es/sphynx-gato.webp',
    name: 'Fiona',
    race: 'Sphynx',
    desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo'
};

const kittenData3 = {
    img: 'https://dev.adalab.es/maine-coon-cat.webp',
    name: 'Cielo',
    race: 'Maine Coon',
    desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta'
};

const kittenDataList = [kittenData1, kittenData2, kittenData3];

//Pintar ficha de gatitos:
const renderKitten = dato => {
    catList.innerHTML += `<li class="card">         
        <img class="card_img" src=${dato.img} alt="siames-cat"/>
        <h3 class="card_title">${dato.name}</h3>
        <h4 class="card_race">${dato.race}</h4>
        <p class="card_description">${dato.desc}</p>
        </li>`;
};

renderKitten(kittenDataList[0]) + renderKitten(kittenDataList[1]) + renderKitten(kittenDataList[2]);

//cuando haga clic en el boton + se muestre el plusForm y cuando vuelva a hacer click se oculte y limpie los campos
plusButton.addEventListener('click', () => {
    plusForm.classList.toggle('collapsed');
    inputUrl.value = '';
    inputName.value = '';
    inputRaza.value = '';
    inputDescription.value = '';
});

//pintar ficha de gatitos con los datos del form

buttonAdd.addEventListener('click', event => {
    event.preventDefault();
    const newKitten = {
        img: inputUrl.value,
        name: inputName.value,
        race: inputRaza.value,
        desc: inputDescription.value
    };
    renderKitten(newKitten);
});

cancelButton.addEventListener('click', event => {
    plusForm.classList.add('collapsed');
});

// Filtro de gatos
const filterKitten = event => {
    event.preventDefault();
    const description = descriptionText.value.trim().toLowerCase();
    const race = razaText.value.trim().toLowerCase();

    catList.innerHTML = '';

    const hasDescription = description !== '';
    const hasRace = race !== '';

    const filtered = kittenDataList.filter(k => {
        const descMatch = k.desc.toLowerCase().includes(description);
        const raceMatch = k.race.toLowerCase().includes(race);

        if (hasDescription && hasRace) return descMatch || raceMatch;
        if (hasDescription) return descMatch;
        if (hasRace) return raceMatch;
        return true; // si no hay filtros, muestra todos
    });

    filtered.forEach(kittenData => renderKitten(kittenData));
};

searchButton.addEventListener('click', filterKitten);


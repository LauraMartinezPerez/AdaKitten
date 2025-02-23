'use strict'
1
const catList = document.querySelector('.list');
const kittenOne = `<li class="card">
                  
                        <img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="siames-cat" />
                        <h3 class="card_title">Anastacio</h3>
                        <h4 class="card_race">Siamés</h4>
                        <p class="card_description">
                            Porte elegante, su patrón de color tan característico y sus ojos
                            de un azul intenso, pero su historia se remonta a Asía al menos
                            hace 500 años, donde tuvo su origen muy posiblemente.
                        </p>
                    </li>`
const kittenTwo = `<li class="card">
                    <img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
                    <h3 class="card_title">Fiona</h3>
                    <h4 class="card_race">Sphynx</h4>
                    <p class="card_description">
                        Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
                        hasta con pinta de alienígena han llegado a definir a esta raza
                        gatuna que se caracteriza por la «ausencia» de pelo.
                    </p>
                </li>`

const kittenThree = `<li class="card">
                    <img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
                    <h3 class="card_title">Cielo</h3>
                    <h4 class="card_race">Maine Coon</h4>
                    <p class="card_description">
                        Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
                        bella mirada se ha convertido en una de sus señas de identidad.
                        Sus ojos son grandes y las orejas resultan largas y en punta.
                    </p>
                </li>`
            

 catList.innerHTML = kittenOne + kittenTwo + kittenThree;

 const plusButton = document.querySelector (".js-btn-add");
 const plusForm = document.querySelector (".js-new-form");
 const cancelButton = document.querySelector (".button-cancel");
 const inputUrl = document.querySelector (".js-input-url");
 const inputName = document.querySelector (".js-input-name");
 const inputRaza = document.querySelector (".js-input-raza");
 const inputDescription = document.querySelector (".js-input-description");

 plusButton.addEventListener ("click", () => {
    // console.log("haz click")
    plusForm.classList.toggle("collapsed");
    inputUrl.value = ("");
    inputName.value = ("");
    inputRaza.value = ("");
    inputDescription.value = ("");

 });

 cancelButton.addEventListener ("click", () => {
    /* console.log("click en cancel") */
    plusForm.classList.add("collapsed");
    inputUrl.value = ("");
    inputName.value = ("");
    inputRaza.value = ("");
    inputDescription.value = ("");

 });

const searchButton = document.querySelector(".js_button-search");
const descriptionText = document.querySelector(".js_in_search_desc");
const kittenDescription1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente"
const kittenDescription2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo"
const kittenDescription3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta"

const razaText = document.querySelector(".js-raza");


searchButton.addEventListener ("click",(event) => {
    event.preventDefault();
    const descriptionValue = descriptionText.value;
    if (kittenDescription1.includes(descriptionValue)) {catList.innerHTML = kittenOne}
    if (kittenDescription2.includes(descriptionValue)) {catList.innerHTML = kittenTwo}
    if (kittenDescription3.includes(descriptionValue)) {catList.innerHTML = kittenThree}

    const razaValue = razaText.value;
    if (razaValue === "") {catList.innerHTML = "¡Uy que despiste, no sabemos su raza!"}
    else if (razaValue === "Siamés") {catList.innerHTML = kittenOne}
    else if (razaValue === "Sphynx") {catList.innerHTML = kittenTwo}
    else if (razaValue === "Maine Coon") {catList.innerHTML = kittenThree}
});














/*  const searchButton = document.querySelector(".js_button-search");
 const descriptionText = document.querySelector(".js_in_search_desc");
 const razaText = document.querySelector(".js-raza");
 const kittenDescription1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente."
 const kittenDescription2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo."
 const kittenDescription3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta."

 searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const descriptionValue = descriptionText.value;
     console.log(descriptionValue); 
    if (kittenDescription1.includes(descriptionValue)) {catList.innerHTML = kittenOne}
    if (kittenDescription2.includes(descriptionValue)) {catList.innerHTML = kittenTwo}
    if (kittenDescription3.includes(descriptionValue)) {catList.innerHTML = kittenThree}

    const razaValue = razaText.value;
    if (razaValue === "") {
        catList.innerHTML = `Uy que despiste, no sabemos su raza`;
    } else if (razaValue === "Siamés") {catList.innerHTML = kittenOne}
    else if (razaValue === "Sphynx") {catList.innerHTML = kittenTwo}
    else if (razaValue === "Maine Coon") {catList.innerHTML = kittenThree}
 }) */

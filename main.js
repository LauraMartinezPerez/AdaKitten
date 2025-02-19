'use strict'
const kittenOne = `<li class="card">
                    <article>
                        <img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="siames-cat" />
                        <h3 class="card_title">Anastacio</h3>
                        <h4 class="card_race">Siamés</h4>
                        <p class="card_description">
                            Porte elegante, su patrón de color tan característico y sus ojos
                            de un azul intenso, pero su historia se remonta a Asía al menos
                            hace 500 años, donde tuvo su origen muy posiblemente.
                        </p>
                    </article>
                </li>`

 const catList = document.querySelector (`.list`);
 catList.innerHTML = kittenOne;           
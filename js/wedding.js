'use strict';

let personCounter = 1;
const thankYouPage = "https://manhdungpham.github.io/phamily/thankYou";
const declinePage = "https://manhdungpham.github.io/phamily/decline";


function ifComing(toggle) {

    if (toggle.value === "true") {
        document.getElementById("phamily__wedding-form-redirect").value = thankYouPage;
        document.getElementById("addPersonButton").style.display = "inline";
        document.getElementById("deletePersonButton").style.display = "inline";
        addPerson(document.getElementById("addPersonButton"));
    } else {
        document.getElementById("phamily__wedding-form-redirect").value = declinePage;
        document.getElementById("addPersonButton").style.display = "none";
        document.getElementById("deletePersonButton").style.display = "none";
        document.getElementById("person-form-wrapper").innerHTML = "";
        personCounter = 1;
    }
}

function addPerson(value) {

    if (personCounter <= 10) {
        let newPersonForm = document.createElement('div');
        newPersonForm.id = "person" + personCounter;
        newPersonForm.innerHTML = getNewPersonTemplate(personCounter);

        value.parentNode.previousElementSibling.append(newPersonForm)
        changeMenu(document.getElementById("adultMenuP" + personCounter), personCounter);

        personCounter++;
    } else {
        alert('Sicher, dass eure Familie so groß ist?');
    }
}

function deletePerson() {
    let personFormWrapper = document.getElementById("person-form-wrapper");
    personFormWrapper.removeChild(personFormWrapper.lastChild);
    personCounter--;
}

function changeMenu(value, objectCounter) {
    let newMenu = document.createElement('div')
    newMenu.id = "menuPerson" + objectCounter;
    newMenu.classList.add("menu-wrapper");
    let changeMenuTemplate = ``;

    if (value.value === "adult") {
        changeMenuTemplate = getAdultMenuTemplate(objectCounter);
    } else if (value.value === "child") {
        changeMenuTemplate = getChildMenuTemplate(objectCounter);
    }

    newMenu.innerHTML = changeMenuTemplate;
    value.parentNode.parentNode.parentNode.lastElementChild.previousElementSibling.replaceWith(newMenu)
}

function getNewPersonTemplate(personCounter) {
    return `
        <p class="h5 text-center">Person ${personCounter}</p>
        <div class="form-group text-center mb-3">
            <label for="forname" class="">Vorname</label>
            <div class="form-floating mt-2">
                <input type="text" class="form-control" name="nameP${personCounter}" placeholder="Name" required>
                <label for="forname">Vorname</label>
            </div>
        </div>
        <div class='phamily__wedding-form-radio-button mb-3'>
             <label for='adultMenuP${personCounter}'>Erwachsener/Kind</label>
             <div class='radio-container'>
                  <input checked='' id='adultMenuP${personCounter}' name='ageP${personCounter}' type='radio' onchange="changeMenu(this, ${personCounter})"
                           value='adult'>
                  <label for='adultMenuP${personCounter}'><i class="fa-solid fa-person fa-xl"></i></label>
                  <input id='childMenuP${personCounter}' name='ageP${personCounter}' type='radio'
                           onchange="changeMenu(this, ${personCounter})" value='child'>
                  <label for='childMenuP${personCounter}'><i class="fa-solid fa-baby fa-xl"></i></label>
             </div>
        </div>
        <div class="menu-placeholder"></div>
        <hr>
    `
}

function getAdultMenuTemplate(currentCounter) {
    return `
        <div class='phamily__wedding-form-radio-button mb-3'>
             <label for='meatMenuP${currentCounter}'>Menüauswahl</label>
             <div class='radio-container'>
                  <input checked='' id='meatMenuP${currentCounter}' name='menuP${currentCounter}' type='radio'
                           value='Ente'>
                  <label for='meatMenuP${currentCounter}'><i class="fa-solid fa-drumstick-bite fa-lg"></i> Ente</label>
                  <input id='fishMenuP${currentCounter}' name='menuP${currentCounter}' type='radio'
                           value='Fisch'>
                  <label for='fishMenuP${currentCounter}'><i class="fa-solid fa-fish fa-lg"></i> Fisch</label>
                  <input id='veganMenuP${currentCounter}' name='menuP${currentCounter}' type='radio'
                           value='Vegan'>
                  <label for='veganMenuP${currentCounter}'><i class="fa-solid fa-carrot fa-lg"></i> Vegetarisch</label>
             </div>
        </div>
        <div class="form-group mb-3">
            <label for="allergiesP${currentCounter}">Das kann ich nicht essen:</label>
            <div class="form-floating mt-2">
                <textarea class="form-control" name="allergiesP${currentCounter}" placeholder="Allergien" style="height: 80px;"></textarea>
                <label for="allergiesP${currentCounter}">Allergien</label>
            </div>
        </div>
        `;
}

function getChildMenuTemplate(currentCounter) {
    return `
                <div class='phamily__wedding-form-radio-button mb-3'>
                     <label for='keinMenuP${currentCounter}'>Menüauswahl</label>
                     <div class='radio-container'>
                          <input checked='' id='keinMenuP${currentCounter}' name='menuP${currentCounter}' type='radio'
                                   value='Kein Esssen'>
                          <label for='keinMenuP${currentCounter}'><i class="fa-solid fa-ban"></i> Kein Essen nötig</label>
                          <input id='schnitzelMenuP${currentCounter}' name='menuP${currentCounter}' type='radio'
                                   value='Schnitzel mit Pommes'>
                          <label for='schnitzelMenuP${currentCounter}'><i class="fa-solid fa-utensils"></i> Schnitzel mit Pommes</label>
                          <input id='spatzleMenuP${currentCounter}' name='menuP${currentCounter}' type='radio'
                                   value='Spatzle mit Sosse'>
                          <label for='spatzleMenuP${currentCounter}'><i class="fa-solid fa-utensils"></i> Spätzle mit Soße</label>
                     </div>
                </div>
                <div class="form-group mb-3">
                    <label for="allergiesP${currentCounter}">Das kann ich nicht essen:</label>
                    <div class="form-floating mt-2">
                        <textarea class="form-control" name="allergiesP${currentCounter}" placeholder="Allergien" style="height: 80px;"></textarea>
                        <label for="allergiesP${currentCounter}">Allergien</label>
                    </div>
                </div>
            `;
}
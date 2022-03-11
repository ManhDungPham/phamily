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

        value.previousElementSibling.append(newPersonForm)
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
        <p>Person ${personCounter}</p>
        <div class="form-group mb-3">
            <div class="form-floating mb-2">
                <input type="text" class="form-control" name="nameP${personCounter}" placeholder="Name" required>
                <label for="forname">Vorname</label>
            </div>
        </div>
        <div class='phamily__wedding-form-radio-button'>
             <label for='adultMenuP${personCounter}'>Erwachsen/Kind</label>
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
    return `<fieldset class="form-group">
                    <div class="row">
                        <legend class="col-form-label col-sm-2 pt-0">Gericht</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="person${currentCounter}"
                                       value="ente" checked>
                                <label class="form-check-label" for="gridRadios1">
                                    Entenbrust
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="person${currentCounter}"
                                       value="fisch">
                                <label class="form-check-label" for="gridRadios2">
                                    Fisch
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="person${currentCounter}"
                                       value="vegan">
                                <label class="form-check-label" for="gridRadios2">
                                    Vegetarisch
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div class="form-group mb-2" style="display: flex; flex-direction: row">
                    <label for="allergiesP${currentCounter}" class="form-label">Folgende Allergien habe ich</label>
                    <textarea class="form-control" name="allergiesP${currentCounter}" rows="3"></textarea>
                </div>
            `;
}

function getChildMenuTemplate(currentCounter) {
    return `<fieldset class="form-group">
                    <div class="row">
                        <legend class="col-form-label col-sm-2 pt-0">Gericht</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="person${currentCounter}"
                                       value="schnitzelMitPommes" checked>
                                <label class="form-check-label" for="gridRadios1">
                                    Schnitzel mit Pommes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="person${currentCounter}"
                                       value="spaetzleMitSoße">
                                <label class="form-check-label" for="gridRadios2">
                                    Spätzle mit Soße
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div class="form-group mb-2" style="display: flex; flex-direction: row">
                    <label for="allergiesP${currentCounter}" class="form-label">Folgende Allergien habe ich</label>
                    <textarea class="form-control" name="allergiesP${currentCounter}" rows="3"></textarea>
                </div>
            `;
}
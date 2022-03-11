'use strict';

let personCounter = 1;

function ifComing(toggle) {
    if (toggle.checked) {
        document.getElementById("addPersonButton").style.display = "inline";
        document.getElementById("deletePersonButton").style.display = "inline";
        addPerson(document.getElementById("addPersonButton"));
    } else {
        document.getElementById("addPersonButton").style.display = "none";
        document.getElementById("deletePersonButton").style.display = "none";
        document.getElementById("person-form-wrapper").innerHTML = "";
        personCounter = 1;
    }
}

function addPerson(value) {

    if(personCounter <= 10 ){
        let newPersonForm = document.createElement('div');
        newPersonForm.id = "person" + personCounter;
        newPersonForm.innerHTML = getNewPersonTemplate(personCounter);

        personCounter++;
        value.previousElementSibling.append(newPersonForm)
    }else {
        alert('Sicher, dass eure Familie so groß ist?');
    }

}

function deletePerson() {
    let personFormWrapper = document.getElementById("person-form-wrapper");
    personFormWrapper.removeChild(personFormWrapper.lastChild);
    personCounter--;
}

function addMenu(value, objectCounter) {
    let newMenu = document.createElement('div')
    newMenu.id = "menuPerson" + objectCounter;
    newMenu.classList.add("menu-wrapper");
    let addMenuTemplate = ``;

    if (value.value === "adult") {
        addMenuTemplate = getAdultMenuTemplate(objectCounter);
    } else {
        addMenuTemplate = getChildMenuTemplate(objectCounter);
    }

    newMenu.innerHTML = addMenuTemplate;
    value.parentNode.parentNode.lastElementChild.previousElementSibling.replaceWith(newMenu)
}

function getNewPersonTemplate(personCounter) {
    return `
              <p>Person ${personCounter}</p>
              <div class="form-group mb-2">
                    <label for="forname">Vorname</label>
                    <input type="text" name="nameP${personCounter}" placeholder="Name">
                    <label for="age">Menüauswahl</label>
                    <select class="form-select" onchange="addMenu(this, ${personCounter})">
                        <option selected>Auswählen</option>
                        <option value="adult">Erwachsen</option>
                        <option value="child">Kind</option>
                    </select>
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
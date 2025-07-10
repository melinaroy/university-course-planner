import { Program } from './classes/program.js';

const programs = [
    new Program(
        "cycle1",
        "certificate",
        "computer-science"
    )
];

const programLevelSelector = document.getElementById("program-level-selector");
const programTypeSelector = document.getElementById("program-type-selector");
const programFieldSelector = document.getElementById("program-field-selector");


function populateProgramTypes() {
    // clean old options
    programTypeSelector.innerHTML = "";
    // populate program types
    const programLevel = programLevelSelector.value;
    for (const [value, text] of Object.entries(Program.programTypes[programLevel])) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = text;
        programTypeSelector.appendChild(option);
    }
    programTypeSelector.selectedIndex = 0;
    populateProgramFields();
};

function populateProgramFields() {
    // clean old options
    programFieldSelector.innerHTML = "";
    // get current selections
    const programLevel = programLevelSelector.value;
    const programType = programTypeSelector.value;
    // populate prgram fields with matching available programs
    let hasMatch = false;
    for (const program of programs) {
        if (program.level === programLevel && program.type === programType) {
            const option = document.createElement("option");
            option.value = program.field;
            option.textContent = program.fieldLabel;
            programFieldSelector.appendChild(option);
            hasMatch = true;
        }
    }
    // no program match the selection
    if (!hasMatch) {
        const option = document.createElement("option");
        option.disabled = true;
        option.value = "";
        option.textContent = "Aucun programme disponible";
        programFieldSelector.appendChild(option);
    }
    // select field and disabled if applicable
    programFieldSelector.selectedIndex = 0;
    programFieldSelector.disabled = !hasMatch;
    populateProgramSection();
}

function getSelectedProgram() {
    // get current selections
    const programLevel = programLevelSelector.value;
    const programType = programTypeSelector.value;
    const programField = programFieldSelector.value;
    for (const program of programs) {
        if (program.level === programLevel && program.type === programType && program.field === programField) {
            return program;
        }
    }
    return "no program selected";
}

function populateProgramSection() {
    // get program section items
    const programSection = document.getElementById("found-program-section");
    const programTitle = document.getElementById("program-title");
    // hide
    programSection.classList.add("hidden");
    if (getSelectedProgram() instanceof Program) {
        // fill program name
        programTitle.innerHTML = getSelectedProgram().toString();
        // enable visibility of section
        programSection.classList.remove("hidden");
    }
}

programLevelSelector.addEventListener("change", () => {
    populateProgramTypes();
});

programTypeSelector.addEventListener("change", () => {
    populateProgramFields();
});
programFieldSelector.addEventListener("change", () => {
    populateProgramSection();
});

window.addEventListener("DOMContentLoaded", () =>{
    if (programLevelSelector.value) {
        populateProgramTypes();
    }
});

import { Program } from './classes/program.js';
import { populateSelector } from './utils/dom.js';

const programs = [
  new Program('cycle1', 'certificate', 'computer-science'),
  new Program('cycle1', 'certificate', 'data-science'),
  new Program('cycle1', 'bachelor', 'data-science'),
  new Program('cycle2', 'microprogram', 'computer-science'),
];

const programLevelSelector = document.getElementById('program-level-selector');
const programTypeSelector = document.getElementById('program-type-selector');
const programFieldSelector = document.getElementById('program-field-selector');

function populateProgramTypes() {
  // clean old options
  programTypeSelector.innerHTML = '';
  // get selected program level
  const programLevel = programLevelSelector.value;
  // create array of program types for the selected level
  const typeEntries = Object.entries(Program.programTypes[programLevel] || {});
  // create options for each program type
  const options = typeEntries.map(([value, text]) => ({ value, text }));
  // populate the selector with the new options
  populateSelector(programTypeSelector, options);
  // populate program fields based on the selected type
  populateProgramFields();
}

function populateProgramFields() {
  // clean old options
  programFieldSelector.innerHTML = '';
  // get current selections
  const programLevel = programLevelSelector.value;
  const programType = programTypeSelector.value;
  // find matching programs
  const matchingPrograms = programs.filter(
    (program) => program.level === programLevel && program.type === programType,
  );
  // if there is a match, populate the field selector
  if (matchingPrograms.length > 0) {
    // populate program fields with matching available programs
    populateSelector(
      programFieldSelector,
      matchingPrograms.map((program) => ({
        value: program.field,
        text: program.fieldLabel,
      })),
    );
    programFieldSelector.disabled = false;
  } else {
    // if no match, create option indicating no program available
    populateSelector(programFieldSelector, [
      { value: '', text: 'No Program Available', disabled: true },
    ]);
    programFieldSelector.disabled = true;
  }
  // populate program section
  populateProgramSection();
}

function getSelectedProgram() {
  // get current selections
  const programLevel = programLevelSelector.value;
  const programType = programTypeSelector.value;
  const programField = programFieldSelector.value;
  for (const program of programs) {
    if (
      program.level === programLevel &&
      program.type === programType &&
      program.field === programField
    ) {
      return program;
    }
  }
  return 'no program selected';
}

function populateProgramSection() {
  // get program section items
  const programSection = document.getElementById('found-program-section');
  const programTitle = document.getElementById('program-title');
  // hide
  programSection.classList.add('hidden');
  const program = getSelectedProgram();
  // if a program is selected, fill the section
  if (program instanceof Program) {
    // fill program name
    programTitle.innerHTML = program.toString();
    // enable visibility of section
    programSection.classList.remove('hidden');
  }
}

programLevelSelector.addEventListener('change', () => {
  populateProgramTypes();
});

programTypeSelector.addEventListener('change', () => {
  populateProgramFields();
});
programFieldSelector.addEventListener('change', () => {
  populateProgramSection();
});

window.addEventListener('DOMContentLoaded', () => {
  if (programLevelSelector.value) {
    populateProgramTypes();
  }
});

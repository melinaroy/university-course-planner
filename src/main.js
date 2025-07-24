import { Program } from './classes/program.js';
import { createSelectorOption } from './utils/dom.js';

const programs = [new Program('cycle1', 'certificate', 'computer-science')];

const programLevelSelector = document.getElementById('program-level-selector');
const programTypeSelector = document.getElementById('program-type-selector');
const programFieldSelector = document.getElementById('program-field-selector');

function populateProgramTypes() {
  // clean old options
  programTypeSelector.innerHTML = '';
  // populate program types
  const programLevel = programLevelSelector.value;
  for (const [value, text] of Object.entries(
    Program.programTypes[programLevel],
  )) {
    // create option
    const option = createSelectorOption(value, text);
    programTypeSelector.appendChild(option);
  }
  programTypeSelector.selectedIndex = 0;
  populateProgramFields();
}

function populateProgramFields() {
  // clean old options
  programFieldSelector.innerHTML = '';
  // get current selections
  const programLevel = programLevelSelector.value;
  const programType = programTypeSelector.value;
  // populate program fields with matching available programs
  let hasMatch = false;
  for (const program of programs) {
    if (program.level === programLevel && program.type === programType) {
      const option = createSelectorOption(program.field, program.fieldLabel);
      programFieldSelector.appendChild(option);
      hasMatch = true;
    }
  }
  // no program match the selection
  if (!hasMatch) {
    const option = createSelectorOption('', 'No Program Available', true);
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
  if (getSelectedProgram() instanceof Program) {
    // fill program name
    programTitle.innerHTML = getSelectedProgram().toString();
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

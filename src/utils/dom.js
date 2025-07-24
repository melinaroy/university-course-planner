// Utility functions for DOM manipulation

export function createSelectorOption(value, text, disabled = false) {
  const option = document.createElement('option');
  option.value = value;
  option.textContent = text;
  option.disabled = disabled;
  return option;
}

// export function populateList(element, list) {
//   for (const el of list) {
//     const li = document.createElement('li');
//     li.textContent = el;
//     element.appendChild(li);
//   }
// }

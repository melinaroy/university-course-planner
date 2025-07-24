// Utility functions for DOM manipulation

function createSelectorOption(value, text, disabled = false) {
  const option = document.createElement('option');
  option.value = value;
  option.textContent = text;
  option.disabled = disabled;
  return option;
}

export function populateSelector(selector, options, defaultIndex = 0) {
  selector.innerHTML = '';
  for (const { value, text, disabled } of options) {
    selector.appendChild(createSelectorOption(value, text, disabled));
  }
  selector.selectedIndex = defaultIndex;
}

// export function populateList(element, list) {
//   for (const el of list) {
//     const li = document.createElement('li');
//     li.textContent = el;
//     element.appendChild(li);
//   }
// }

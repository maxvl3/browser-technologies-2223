// Selecteer alle inputvelden en scorebars in het formulier
const formElements = document.querySelectorAll(
  'form input[type="text"], form input[type="email"], input[type="radio"]'
);

// Loop door de inputvelden en scorebars heen en sla de ingevulde waarde op in local storage
formElements.forEach((element) => {
  // Voeg een event listener toe om de waarde op te slaan wanneer deze verandert
  element.addEventListener("change", () => {
    localStorage.setItem(element.name, element.value);
  });

  // Haal de opgeslagen waarde op uit local storage en vul het element in met deze waarde
  const savedValue = localStorage.getItem(element.name);
  if (savedValue) {
    if (element.type === "radio") {
      if (element.value === savedValue) {
        element.checked = true;
      }
    } else {
      element.value = savedValue;
    }
  }
});

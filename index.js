const text = document.getElementById("word");
const responses = document.getElementById("responses");
const input = document.getElementById("correct");

const names = [
  "onomatopoeia",
  "bioluminiscence",
  "hyperbole",
  "mitochondria",
  "eruption",
  "adolescence",
  "volcanic",
  "pineapple",
  "inhumane",
  "",
];

text.textContent = randomfruits();

function randomfruits() {
  const randomIndex = Math.floor(Math.random() * names.length);

  return names[randomIndex]
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

function next() {
  text.textContent = randomfruits();
  responses.textContent = "";
}

function submit() {
  const randomfruitsLength = text.textContent.length;

  const sortInputValue = input.value.split("").sort().join("");
  const sortTextValue = text.textContent.split("").sort().join("");

  if (
    input.value.length === randomfruitsLength &&
    names.includes(input.value) &&
    sortInputValue === sortTextValue
  ) {
    responses.textContent = "Correct";
  } else {
    responses.textContent = "Incorrect";
  }
}

// const fruit = allFruits[randomIndex].split('').sort(()=> Math.random() - 0.5).join('')
// const randomWords = allFruits.sort(()=> Math.random() - 0.5)
// const letters = randomWords[0].split('').sort(()=> Math.random() - 0.5).join('')
// const words = "shop".split('')

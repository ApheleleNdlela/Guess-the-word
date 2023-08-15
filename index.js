const text = document.getElementById("word");
const responses = document.getElementById("responses");
const input = document.getElementById("correct");
const submitbtn = document.getElementById('submit')

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
  "unequivocally",
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
  submitbtn.disabled = false;
  input.disabled = false;


  text.textContent = randomfruits();
  
  document.getElementById('correct').value =''
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
    responses.textContent = "Correct"
    submitbtn.disabled = true;
    input.disabled = true;

  } else {
    responses.textContent = "Incorrect";
  }
}
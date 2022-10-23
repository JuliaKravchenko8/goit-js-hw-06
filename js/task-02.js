const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const ingredientItem = (items) => {
  return items.map((item) => {
    const ingredientItemEl = document.createElement("li");
    ingredientItemEl.classList.add("item");
    ingredientItemEl.textContent = item;
    return ingredientItemEl;
  });
};
ingredientsEl.append(...ingredientItem(ingredients));
console.log(ingredientsEl);

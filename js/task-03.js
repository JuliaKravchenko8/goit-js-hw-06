const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const addImg = document.querySelector(".gallery");

images.forEach((img) => {
  addImg.insertAdjacentHTML(
    "afterbegin",
    `<li><img src="${img.url}" alt="${img.alt}" width = '200' height = '150'></li>`
  );
  addImg.setAttribute(
    "style",
    "list-style:none; display: flex; gap: 15px; padding-top: 30px; justify-content:center;"
  );
});
console.log(addImg);

import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import * as basicLightbox from "basiclightbox";
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

// const markup = galleryItems.reduce(
//   (acc, item) =>
//     acc +
//     `<div class="gallery__item">
//   <a class="gallery__link" href="${item.original}">
//     <img
//       class="gallery__image"
//       src="${item.preview}"
//       data-source="${item.original}"
//       alt="${item.description}"
//     />
//   </a>
// </div>`,
//   ""
// );

// galleryEl.insertAdjacentHTML("beforeend", markup);

const markup = galleryItems
  .map(
    (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");

galleryEl.innerHTML = markup;

let instance;

function onClick(event) {
  event.preventDefault();
  console.dir(event.target);
  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1280">
`);
  console.log(instance);
  instance.show();
}

galleryEl.addEventListener("click", onClick);

// function onCloseModal(event) {
//   console.dir(event);
//   if (event.code === "Escape") {
//     const box = document.querySelector(".basicLightbox");
//     box.classList.value = "";
//     console.log(box.classList);
//   }
// }

function onCloseModal(event) {
  console.dir(event);
  if (event.code === "Escape") {
    instance.close();
  }
}

document.addEventListener("keydown", onCloseModal);

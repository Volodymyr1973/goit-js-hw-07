import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

galleryEl.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
}

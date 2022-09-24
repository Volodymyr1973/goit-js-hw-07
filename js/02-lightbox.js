import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const markup = galleryItems.reduce(
  (acc, item) =>
    acc +
    `<li class="gallery__items"> 
    <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
</a>
</li>`,
  ""
);

console.log(markup);

galleryEl.innerHTML = markup;

function onClick(event) {
  event.preventDefault();

  console.log(event);
}

galleryEl.addEventListener("click", onClick);

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "alt",
  captionPosition: "bottom",

  captionDelay: 250,
  enableKeyboard: true,
  heightRatio: 0.9,
});

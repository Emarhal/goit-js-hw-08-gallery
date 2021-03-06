import galleryItems from "./gallery-items.js";

const ref = {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  lightboxImg: document.querySelector(".lightbox__image"),
  closeBtn: document.querySelector(".lightbox__button"),
};

console.log(ref.closeBtn);

const galleryList = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.preview}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
  })
  .join("");

ref.gallery.insertAdjacentHTML("beforeend", galleryList);
function abdateAtt(src = "", alt = "") {
  ref.lightboxImg.src = src;
  ref.lightboxImg.alt = alt;
}

ref.gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "IMG") return;
  ref.lightbox.classList.add("is-open");
  abdateAtt(event.target.dataset.source, event.target.alt);
});

ref.closeBtn.addEventListener("click", (event) => {
  ref.lightbox.classList.remove("is-open");
  abdateAtt();
});

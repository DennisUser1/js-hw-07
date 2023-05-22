import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryUlEl = document.querySelector('.gallery');
galleryUlEl.insertAdjacentHTML('beforeend', doGalleryList(galleryItems));

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    animationSpeed: 250,
});


//
//~ any functions 
//
function doGalleryList(arrGalleryItems) {
    return arrGalleryItems.map(({ preview, original, description }) => {
        //const { preview, origin, description } = el;
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
    </li>`
    }).join('');
}

// Спочатку ми знаходимо контейнер галереї за допомогою методу document.querySelector() і записуємо його у змінну galleryUlEl.
// Використовуючи метод insertAdjacentHTML, вставляємо вміст, який повертає функція doGalleryList, перед закриваючим тегом елемента з класом 'gallery'.
// Функція doGalleryList() творює розмітку для кожного елемента галереї, використовуючи метод map() та деструктуризацію, 
// перетворює масив зображень galleryItems на рядок HTML - коду, який містить список < li > елементів з посиланнями < a > на зображення, що знаходяться на сторонньому ресурсі.Кожне зображення у списку містить посилання на оригінальне зображення, яке відкривається при кліку на зображення в галереї.
// Після створення HTML-коду галереї ми створюємо об'єкт SimpleLightbox з параметрами, які вказують, які дані використовувати для підпису до зображень, як довго показувати підпис, та яка швидкість анімації має бути відображена. Об'єкт SimpleLightbox приймає CSS-селектор .gallery a, який означає, що всі посилання <a> в контейнері .gallery повинні бути відкриті в галереї.
// Ініціалізуємо SimpleLightbox на елементі HTML з класом 'gallery', вказуючи captionsData як alt, captionDelay та animationSpeed - як необов'язкові параметри. Ці налаштування відповідають за те, що текст з атрибуту alt буде використаний як підпис зображення, анімаційна швидкість буде становити 250 мс, а затримка відображення підпису - також 250 мс.
// Отже, коли користувач клікає на зображення в галереї, виконується метод SimpleLightbox() з CSS-селектором .gallery a, який ініціює роботу галереї.


// const galleryContainer = document.querySelector('.gallery');

// function createGalleryMarkup(galleryItems) {
//     return galleryItems.map(({ preview, original, description }) => {
//         return `<li class="gallery__card">
//                     <a class="gallery__item" href="${original}">
//                         <img class="gallery__image" src="${preview}" alt="${description}" />
//                     </a>
//                 </li>`;
//     }).join('');
// };

// galleryContainer.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));
// const captionImg = new SimpleLightbox('.gallery__item', { captionSelector: 'img', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });
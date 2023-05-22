import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const imgMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMarkup)

galleryContainer.addEventListener('click', onImageClick);

function createGalleryMarkup(galleryItems){
    return galleryItems.map(({ preview, original, description }) => { 
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                </div>`;
    }).join('');
};

function onImageClick(e){
    e.preventDefault();
    const targetImg = e.target.classList.contains('gallery__image');

    if (!targetImg) {
            return;
        } 
        const urlImg = e.target.dataset.source;
        
        const bigPicture = basicLightbox.create(`<img src="${urlImg}">`);
        bigPicture.show(() => window.addEventListener('keydown', onKeyDown));
        
        function onKeyDown(e) {
            if (e.key === 'Escape') {
                bigPicture.close(() => window.removeEventListener('keydown', onKeyDown));
                return;
            }
            return;
        };    
};



// Перший рядок коду отримує доступ до контейнера галереї в HTML-структурі та зберігає його в змінній gallaryContainer.
// Знаходимо контейнер галереї за допомогою методу querySelector, відповідно до класу .gallery.
// Другий рядок використовує функцію createGalleryMarkup для створення HTML-розмітки елементів галереї з даними з масиву galleryItems. Функція приймає масив об'єктів galleryItems та повертає рядок з розміткою.
// Третій рядок додає отриману HTML-розмітку в контейнер галереї за допомогою методу insertAdjacentHTML.
// Четвертий рядок додає обробник події click на контейнер галереї та викликає функцію onImageClick при кліку на елемент галереї. При кліку на зображення викликаємо функцію onImageClick.
// Далі Функція createGalleryMarkup створює розмітку для елементів галереї. Вона приймає масив galleryItems та за допомогою методу map створює рядок HTML для кожного об'єкту масиву.
// Отриманий масив перетворюється в одну рядкову HTML-розмітку за допомогою методу join. 
// У кожному об'єкті масиву galleryItems є дані про зображення: посилання на маленьке зображення preview, посилання на велике зображення original та опис зображення description. 
// Рядок з розміткою обгортає зображення у посилання з href, що містить посилання на велике зображення, а також додає атрибути data-source та alt для зображення.
// Функція onImageClick обробляє клік на елементі галереї. Вона перевіряє, чи клік був на зображенні (а не на іншому елементі елементу галереї) та якщо так, то зберігає посилання на велике зображення в змінній urlImg. 
// Функція onImageClick приймає об'єкт події e та відміняє дію за замовчуванням. Перевіряємо, чи було натиснуте зображення, яке містить клас gallery__image. Якщо ні, функція завершується. Якщо так, отримуємо URL зображення з атрибута data-source. 
// Якщо так, то вона запобігає стандартній поведінці посилання із клікнутого елементу за допомогою методу preventDefault(), отримує посилання на повнорозмірне зображення original, створює екземпляр модального вікна basicLightbox, який містить збільшене зображення, та показує його на сторінці.
// Потім створюється модальне вікно з великим зображенням за допомогою методу create бібліотеки basicLightbox, яке приймає HTML - розмітку для вікна. При цьому додається обробник події show.
// Для створення модального вікна з зображенням використовується метод basicLightbox.create(). Цей метод приймає рядок з HTML-кодом, який буде використовуватися для створення модального вікна. 
// У нашому випадку це рядок з тегом < img >, в якому атрибут src замінюється на посилання на велике зображення, яке береться з data - source елемента зображення у галереї.
// Функція onKeyDown викликається при натисканні клавіші на клавіатурі після відкриття модального вікна з зображенням. Вона перевіряє, чи була натиснута клавіша "Escape" і закриває модальне вікно за допомогою методу close(). Якщо інша клавіша була натиснута, то функція не виконує жодних дій.
// Окрім того, у коді використовується метод insertAdjacentHTML(), який відповідає за вставку HTML-коду в певне місце в HTML-структурі сторінки, що було вказано у завданні.
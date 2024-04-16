document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    let basket = document.querySelector('.top-menu__basket');
    let container = document.querySelector('.top-menu .container');
    let mainMenu = document.querySelector('.main-menu');
    let logo = mainMenu.querySelector('.logo');

    // Функция для обработки изменений
    let handleChanges = function(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                // Если изменен класс у корзины, обновляем стили у контейнера
                if (basket.classList.contains('empty')) {
                    container.classList.remove('wide');
                    logo.classList.remove('mini');
                    mainMenu.classList.remove('tall');
                } else {
                    container.classList.add('wide');
                    logo.classList.add('mini');
                    mainMenu.classList.add('tall');
                }
            }
        }
    };

    // Наблюдатель за изменениями в дочерних элементах корзины
    let observer = new MutationObserver(handleChanges);

    // Настраиваем наблюдение
    observer.observe(basket, { attributes: true });
});
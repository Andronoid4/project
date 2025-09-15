// main.js

const dialog = document.getElementById('contactDialog');
const openBtn = document.getElementById('openDialog');
const closeBtn = document.getElementById('closeDialog');
const form = document.getElementById('contactForm');
let lastActive = null;

// Открытие модального окна
openBtn.addEventListener('click', () => {
    lastActive = document.activeElement; // Запоминаем последний активный элемент
    dialog.showModal(); // Открываем модалку в модальном режиме [cite: 97]
    dialog.querySelector('input, select, textarea, button')?.focus(); // Переносим фокус внутрь [cite: 100]
});

// Закрытие модального окна
closeBtn.addEventListener('click', () => {
    dialog.close('cancel');
});

// Валидация формы
form?.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1) Сброс кастомных сообщений
    [...form.elements].forEach(el => el.setCustomValidity?.(''));

    // 2) Проверка встроенных ограничений
    if (!form.checkValidity()) {
        const email = form.elements.email;
        if (email?.validity.typeMismatch) {
            email.setCustomValidity('Введите корректный e-mail, например name@example.com');
        }
        form.reportValidity(); // Показываем браузерные подсказки [cite: 178]

        // Подсветка проблемных полей для доступности
        [...form.elements].forEach(el => {
            if (el.willValidate) {
                el.toggleAttribute('aria-invalid', !el.checkValidity());
            }
        });
        return;
    }

    // 3) Успешная "отправка" (без сервера)
    dialog.close('success');
    form.reset();
});

// Возврат фокуса после закрытия
dialog.addEventListener('close', () => {
    lastActive?.focus();
});

const phone = document.getElementById('phone');

phone?.addEventListener('input', () => {
    // Получаем только цифры и ограничиваем до 11
    const digits = phone.value.replace(/\D/g, '').slice(0, 11);
    
    // Если первая цифра 8, меняем ее на 7
    const normalizedDigits = digits.startsWith('8') ? '7' + digits.slice(1) : digits;

    let formattedValue = '';
    
    // Форматируем в соответствии с паттерном: +7 (XXX) XXX-XX-XX
    if (normalizedDigits.length > 0) {
        formattedValue += '+7';
    }
    if (normalizedDigits.length > 1) {
        formattedValue += ` (${normalizedDigits.slice(1, 4)}`;
    }
    if (normalizedDigits.length > 4) {
        formattedValue += `) ${normalizedDigits.slice(4, 7)}`;
    }
    if (normalizedDigits.length > 7) {
        formattedValue += `-${normalizedDigits.slice(7, 9)}`;
    }
    if (normalizedDigits.length > 9) {
        formattedValue += `-${normalizedDigits.slice(9, 11)}`;
    }
    
    phone.value = formattedValue;
});
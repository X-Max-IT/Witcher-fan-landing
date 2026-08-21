const openModalBtn = document.querySelectorAll('[data-js="preorder"]');
const modal = document.querySelector('[data-js="preorder-modal"]');
const title = modal.querySelector('[data-js="preorder-modal-title"]');
const descript = modal.querySelector('[data-js="preorder-modal-description"]');
const form = modal.querySelector('form');
const input = modal.querySelector('[data-js="preorder-email-input"]');
const errorMessage = modal.querySelector('[data-js="preorder-error"]');
const sumbitButton = modal.querySelector('[data-js="preorder-button-submit"]');
const closeButton = modal.querySelector('[data-js="preorder-button-close"]');
const restartButton = modal.querySelector('[data-js="preorder-button-restart"]');

const LOCAL_KEY = 'preorder';

function getLocal() {
    return JSON.parse(localStorage.getItem(LOCAL_KEY));
}

function originalState() { //* Состояние 1 - оригинальная версия формы
    const preorder = getLocal();
    if (preorder?.isOrder) {
        reminderStatus(preorder.email);  //* Если данные уже есть - открывается третье состояние формы
        return;
    }
    title.textContent = 'Pre-order now';
    descript.textContent = 'Leave your email and well notify you when the game is available.';

    sumbitButton.style.display = '';
    input.style.display = '';
    errorMessage.style.display = 'none';
    restartButton.style.display = 'none';
}

function stateOfSuccess() { //* Состояние 2 - Успешный предзаказ
    title.textContent = 'Successful';
    descript.textContent = 'You have successfully placed an order';

    sumbitButton.style.display = 'none';
    input.style.display = 'none';
}

function reminderStatus(email) { //* Состояние 3 - Напоминание об успешном предзаказе при повторном вызове
    title.textContent = 'Successful';
    descript.textContent = `You have successfully placed an order by mail: ${email}`;
    sumbitButton.style.display = 'none';
    input.style.display = 'none';
    restartButton.style.display = 'block';
}

restartButton.addEventListener('click', () => {
    localStorage.removeItem(LOCAL_KEY);
    originalState();
})

openModalBtn.forEach(button => {
    button.addEventListener('click', () => {
        modal.showModal();
        originalState();
    })
})

input.addEventListener('invalid', (event) => {
    event.preventDefault();
    errorMessage.textContent = 'Geralt is not happy with your mail...';
    errorMessage.style.display = 'block';
    return;
})

input.addEventListener('input', (event) => {
    event.preventDefault();
    errorMessage.style.display = 'none';
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = input.value.trim();
    if (!email) return;
    const data = {
        email,
        isOrder: true
    }
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
    stateOfSuccess();
})

closeButton.addEventListener('click', () => {
    modal.close();
})
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
})
const openModalBtn = document.querySelectorAll('[data-js="preorder"]');
const modal = document.querySelector('[data-js="preorder-modal"]');
const title = modal.querySelector('[data-js="preorder-modal-title"]');
const descript = modal.querySelector('[data-js="preorder-modal-description"]');
const form = modal.querySelector('form');
const input = modal.querySelector('[data-js="preorder-email-input"]');
const errorMessage = modal.querySelector('[data-js="preorder-error"]');
const sumbitButton = modal.querySelector('[data-js="preorder-button-submit"]');
const closeButton = modal.querySelector('[data-js="preorder-button-close"]');

function getPreorder() {
    return JSON.parse(localStorage.getItem('preorder'));
}

function resetModal() {
    form.reset();
    input.style.display = '';
    sumbitButton.style.display = '';
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    const resetMail = form.querySelector('[data-js="reset-email"]');
    //* Если кнопка ресета уже есть - удаляю
    if (resetMail) {
        resetMail.remove();
    }
}
function succesfulOrder() {
    title.textContent = 'Successful';
    descript.textContent = `You have successfully placed an order`;
    input.style.display = 'none';
    sumbitButton.style.display = 'none';
}
function updateInformation() {
    const preorder = getPreorder();
    if (!preorder?.isOrder) return;
    let resetEmail = form.querySelector('[data-js="reset-email"]');

    if (!resetEmail) {
        resetEmail = document.createElement('button');
        resetEmail.classList.add('preorder-modal__reset');
        resetEmail.textContent = 'Order again';
        resetEmail.setAttribute('data-js', 'reset-email');
        form.append(resetEmail);
    }
    title.textContent = 'Successful';
    descript.textContent = `You have successfully placed an order by mail: ${preorder.email}`;
    input.style.display = 'none';
    sumbitButton.style.display = 'none';

    resetEmail.replaceWith(resetEmail.cloneNode(true));
    resetEmail = form.querySelector('[data-js="reset-email"]');
    resetEmail.addEventListener('click', () => {
        localStorage.removeItem('preorder');
        resetModal();
    });
}

openModalBtn.forEach(button => {
    button.addEventListener('click', () => {
        modal.showModal();
        const preorder = getPreorder();
        if (preorder?.isOrder) {      //* Если значение undefined - сбрасывает форму. А иначе должен выйти экран успеха
            updateInformation();
            return;
        }
        resetModal();
        input.focus();
    })
})

if (input && form) {
    input.addEventListener('invalid', (event) => {
        event.preventDefault();
        errorMessage.textContent = 'Geralt is not happy with your mail...';
        errorMessage.style.display = 'block';
        return;
    });
    input.addEventListener('input', (event) => {
        event.preventDefault();
        errorMessage.style.display = 'none';
    });
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = input.value.trim();
        if (!email) return;
        const data = {
            email,
            isOrder: true
        };
        localStorage.setItem('preorder', JSON.stringify(data));
        succesfulOrder();
    })
}
closeButton.addEventListener('click', () => {
    modal.close();
    resetModal();
});
modal.addEventListener('click', event => {
    if (event.target === modal) {
        modal.close();
        resetModal();
    }
})


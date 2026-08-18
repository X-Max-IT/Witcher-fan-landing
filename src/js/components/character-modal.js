import { fetchCharacters } from "./characters";

const characterList = document.querySelector('[data-js="characters-list"]');
const modal = document.querySelector('[data-js="character-modal"]');

const modalImg = modal.querySelector('[data-js="character-modal-image"]');
const modalTags = modal.querySelector('[data-js="character-modal-tags"]');
const modalTitle = modal.querySelector('[data-js="character-modal-title"]');
const modalDescript = modal.querySelector('[data-js="character-modal-description"]');
const modalCloseBtn = modal.querySelector('[data-js="character-modal-close"');

function updateModal(character) {
    modalImg.src = character.avatar;
    modalImg.alt = character.name;

    modalTitle.textContent = character.name;
    modalDescript.textContent = character.fullDescription || 'Описание отсутствует';

    modalTags.innerHTML = '';

    if (character.tags && character.tags.length > 0) {
        character.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.classList.add('character-modal__tag');
            tagSpan.textContent = tag;
            modalTags.appendChild(tagSpan);
        });
    }
}

if (characterList && modal) {
    characterList.addEventListener('click', async (event) => {
        console.log('Клик зафиксирован! Элемент, на который нажали:', event.target);

        const clickedCard = event.target.closest('.character-card');

        // Если лифт поднялся до самого верха HTML и так и не нашел карточку (кликнули реально мимо)
        if (!clickedCard) {
            console.log('Клик был МИМО карточки персонажа.');
            return;
        }

        // Если код прошел дальше — карточка 100% найдена!
        console.log('Карточка успешно найдена! Её HTML:', clickedCard);

        const characterId = Number(clickedCard.dataset.id);
        try {
            const characters = await fetchCharacters();
            const currentCharacter = characters.find(el => el.id === characterId);

            if (currentCharacter) {
                updateModal(currentCharacter);
                modal.showModal();
            }
        }
        catch (error) {
            console.error(`Ошибка при открытии модального окна: ${error}`);
        }
    });
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => {
            modal.close();
        });
    }
    modal.addEventListener('click', event => {
        if (event.target === modal) {
            modal.close();
        }
    })
}

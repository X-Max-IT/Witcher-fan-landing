const CHARACTERS_API_URL = '/Witcher-fan-landing/data/characters.json';

const characterList = document.querySelector('[data-js="characters-list"]');

export async function fetchCharacters() {
    const response = await fetch(CHARACTERS_API_URL);
    if (!response.ok) throw new Error('Ошибка загрузки JSON');
    return response.json();
}

function createCharacterCard(character) {
    const card = document.createElement('article');
    card.classList.add('character-card');
    card.setAttribute('data-id', character.id);
    card.style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.75) 25%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 70%),
     url('${character.avatar}')`;
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';

    card.innerHTML = `
    <div class="character-card__content">
        <div class="character-card__text">
            <h3 class="character-card__title">${character.name}</h3>
            <p class="character-card__description">${character.shortDescription}</p>
        </div>
        <button type="button" class="character-card__button" data-js="card-button">Learn more</button>
    </div>`;

    return card;
}

export async function renderCard() {
    if (!characterList) return;
    try {
        const characters = await fetchCharacters();
        characterList.innerHTML = '';
        characters.forEach(character => {
            const card = createCharacterCard(character);
            characterList.appendChild(card);
        });
    }
    catch (error) {
        console.error(`Ошибка при рендере карточек: ${error}`);
    }
}

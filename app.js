(() => {
  'use strict';

  const STORAGE_KEY = 'sgx-flashcards-progress-v1';
  const validIds = new Set(FLASHCARDS.map(card => card.id));
  const categoryNames = new Map(CARD_CATEGORIES.map(category => [category.id, category.label]));
  const elements = {
    knownCount: document.getElementById('known-count'),
    reviewCount: document.getElementById('review-count'),
    newCount: document.getElementById('new-count'),
    reviewTotal: document.getElementById('review-total'),
    allTotal: document.getElementById('all-total'),
    essentialTotal: document.getElementById('essential-total'),
    progressBar: document.getElementById('progress-bar'),
    saveMessage: document.getElementById('save-message'),
    categoryFilter: document.getElementById('category-filter'),
    cardCounter: document.getElementById('card-counter'),
    flashcard: document.getElementById('flashcard'),
    cardCategory: document.getElementById('card-category'),
    essentialBadge: document.getElementById('essential-badge'),
    cardQuestion: document.getElementById('card-question'),
    cardAnswer: document.getElementById('card-answer'),
    flipHint: document.getElementById('flip-hint'),
    emptyState: document.getElementById('empty-state'),
    statusActions: document.getElementById('status-actions'),
    markReview: document.getElementById('mark-review'),
    markKnown: document.getElementById('mark-known'),
    previous: document.getElementById('previous'),
    next: document.getElementById('next'),
    reset: document.getElementById('reset-progress')
  };

  function loadStatuses() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      const clean = {};
      if (stored && typeof stored === 'object') {
        for (const [id, value] of Object.entries(stored)) {
          if (validIds.has(id) && (value === 'known' || value === 'review')) clean[id] = value;
        }
      }
      return clean;
    } catch {
      elements.saveMessage.textContent = 'Progress is available for this visit only.';
      return {};
    }
  }

  const state = { mode: 'all', category: 'all', index: 0, revealed: false, statuses: loadStatuses() };

  function saveStatuses() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.statuses));
      elements.saveMessage.textContent = 'Progress saves on this device.';
    } catch {
      elements.saveMessage.textContent = 'Progress is available for this visit only.';
    }
  }

  function filteredCards() {
    return FLASHCARDS.filter(card =>
      (state.category === 'all' || card.category === state.category) &&
      (state.mode === 'all' ||
        (state.mode === 'essentials' && card.essential) ||
        (state.mode === 'review' && state.statuses[card.id] === 'review'))
    );
  }

  function render() {
    const known = Object.values(state.statuses).filter(value => value === 'known').length;
    const review = Object.values(state.statuses).filter(value => value === 'review').length;
    elements.knownCount.textContent = known;
    elements.reviewCount.textContent = review;
    elements.newCount.textContent = FLASHCARDS.length - known - review;
    elements.reviewTotal.textContent = review;
    elements.allTotal.textContent = FLASHCARDS.length;
    elements.essentialTotal.textContent = FLASHCARDS.filter(card => card.essential).length;
    elements.progressBar.max = FLASHCARDS.length;
    elements.progressBar.value = known;
    elements.progressBar.setAttribute('aria-label', `${known} known cards out of ${FLASHCARDS.length}`);

    document.querySelectorAll('.mode').forEach(button => {
      const active = button.dataset.mode === state.mode;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    const cards = filteredCards();
    state.index = Math.max(0, Math.min(state.index, cards.length - 1));
    const card = cards[state.index];
    const empty = !card;
    elements.flashcard.hidden = empty;
    elements.emptyState.hidden = !empty;
    elements.statusActions.hidden = empty;
    elements.cardCounter.textContent = empty ? 'No cards in this view' : `Card ${state.index + 1} of ${cards.length}`;
    elements.previous.disabled = empty || state.index === 0;
    elements.next.disabled = empty || state.index === cards.length - 1;
    if (empty) return;

    elements.cardCategory.textContent = categoryNames.get(card.category);
    elements.essentialBadge.hidden = !card.essential;
    elements.cardQuestion.textContent = card.question;
    elements.cardAnswer.replaceChildren(...card.answer.map(point => {
      const item = document.createElement('span');
      item.className = 'answer-point';
      item.setAttribute('role', 'listitem');
      item.textContent = point;
      return item;
    }));
    elements.cardAnswer.hidden = !state.revealed;
    elements.flipHint.textContent = state.revealed ? 'Tap to hide answer ↑' : 'Tap to reveal answer ↗';
    elements.flashcard.setAttribute('aria-label', `${state.revealed ? 'Hide' : 'Reveal'} answer: ${card.question}`);
    elements.markKnown.setAttribute('aria-pressed', String(state.statuses[card.id] === 'known'));
    elements.markReview.setAttribute('aria-pressed', String(state.statuses[card.id] === 'review'));
  }

  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = 'All topics';
  elements.categoryFilter.append(allOption);
  CARD_CATEGORIES.forEach(category => {
    const option = document.createElement('option');
    option.value = category.id;
    option.textContent = category.label;
    elements.categoryFilter.append(option);
  });

  document.querySelectorAll('.mode').forEach(button => button.addEventListener('click', () => {
    state.mode = button.dataset.mode;
    state.index = 0;
    state.revealed = false;
    render();
  }));
  elements.categoryFilter.addEventListener('change', () => {
    state.category = elements.categoryFilter.value;
    state.index = 0;
    state.revealed = false;
    render();
  });
  elements.flashcard.addEventListener('click', () => {
    state.revealed = !state.revealed;
    render();
  });
  elements.previous.addEventListener('click', () => {
    state.index -= 1;
    state.revealed = false;
    render();
    elements.flashcard.focus();
  });
  elements.next.addEventListener('click', () => {
    state.index += 1;
    state.revealed = false;
    render();
    elements.flashcard.focus();
  });

  function markCurrent(status) {
    const card = filteredCards()[state.index];
    if (!card) return;
    state.statuses[card.id] = status;
    state.revealed = false;
    saveStatuses();
    render();
  }
  elements.markKnown.addEventListener('click', () => markCurrent('known'));
  elements.markReview.addEventListener('click', () => markCurrent('review'));
  elements.reset.addEventListener('click', () => {
    if (!window.confirm('Clear all saved flashcard progress on this device?')) return;
    state.statuses = {};
    state.mode = 'all';
    state.category = 'all';
    state.index = 0;
    state.revealed = false;
    elements.categoryFilter.value = 'all';
    saveStatuses();
    render();
  });

  render();
})();

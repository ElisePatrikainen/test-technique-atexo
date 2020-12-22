export const createCard = (color, value) => ({
  color,
  value,
  selected: false,
});

const createColorSet = (color, cardValueOrder) => {
    return cardValueOrder.map(
        (cardValue) => createCard(color, cardValue)
    )
};

export const createCards = (colorOrder, cardValueOrder) => {
  const set = colorOrder.reduce(
    (set, color) => [...set, ...createColorSet(color, cardValueOrder)],
    []
  );
  set.forEach((card, index) => (card.index = index));
  return set;
};

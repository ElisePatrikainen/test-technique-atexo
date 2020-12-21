const getValue = (colorIndex) => {
  switch (colorIndex) {
    case 0:
      return "as";
    case 10:
      return "valet";
    case 11:
      return "dame";
    case 12:
      return "roi";
    default:
      return colorIndex + 1;
  }
};

export const createCard = (color, colorIndex) => ({
  color,
  value: getValue(colorIndex),
  selected: false,
});

const createColorSet = (color) => {
  const set = [];
  for (let i = 0; i < 13; i++) {
    set.push(createCard(color, i));
  }
  return set;
};

export const createCards = () => {
  const set = ["carreau", "coeur", "pique", "trèfle"].reduce(
    (set, color) => [...set, ...createColorSet(color)],
    []
  );
  set.forEach((card, index) => (card.index = index));
  return set;
};

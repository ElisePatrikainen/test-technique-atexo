// todo: harmonize name
export const orderSet = (set) =>
  set.slice().sort((cardA, cardB) => cardA.index - cardB.index);

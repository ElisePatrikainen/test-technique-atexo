// todo: harmonize name
export const orderSet = (set) => set.sort(
    (cardA, cardB) => cardA.index - cardB.index
)
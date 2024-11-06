/**
 * Shuffles an array of items randomly and returns a new array
 *
 * Note: `$` is used to indicate that this function is not a pure function - it is not deterministic
 * Note: This function does NOT mutate the original array
 * Warning: This function is NOT cryptographically secure (it uses Math.random internally)
 *
 * @param items - An array of items to be shuffled.
 * @returns A new array containing the shuffled items.
 * @throws No exceptions are thrown by this function.
 */
export function $shuffleItems<TItem>(...items: ReadonlyArray<TItem>): ReadonlyArray<TItem> {
    const newItems = [...items];
    newItems.sort(() => Math.random() - 0.5);
    return newItems;
}

/**
 * TODO: [🧠][👵] Figure out something between rotateItems and shuffleItems which is more generic and recieves a ruleset how to reordeto the array in some general way
 * Note: [⚫] Code in this file should never be published in any package
 */

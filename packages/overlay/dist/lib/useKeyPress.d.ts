type ModifierKeys = 'altKey' | 'ctrlKey' | 'shiftKey' | 'metaKey';
/**
 * useKeyPress
 * @param {string} key - The letter or name of the key to respond to -- this is normalized to lower case
 * @param {ModifierKeys[]} modifiers - The modifiers that needs to be activated such as ctrlKey
 * @param {function} action - the action to perform on key press
 * @param {boolean} propagate - whether to stop event propagation (default is false)
 */
export default function useKeyPress(key: string, modifiers: ModifierKeys[], action: () => void, propagate?: boolean): void;
export {};

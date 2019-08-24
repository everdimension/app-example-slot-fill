export const keyMap = {
  log: 'r'
};

export function registerKeybinding(name, value) {
  keyMap[name] = value;
}

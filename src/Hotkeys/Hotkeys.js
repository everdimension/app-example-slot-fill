import React from 'react';
import isHotKey from 'is-hotkey';

const { useEffect } = React;
// registerKeybinding('SOMETHING', 'shift+l');
// registerKeybinding('two', 'r');
// export function Shortcuts({ bindings }) {
//   console.log('render shortcuts');
//   return (
//     <HotKeys
//       handlers={{
//         SOMETHING: () => {
//           console.log('CONSOLE!');
//         },
//         two: () => {
//           console.log('CONSOLE!');
//         },
//       }}
//     >ar eyou fucking kidding me</HotKeys>
//   );
// }

export function Keybinding({ combo, onKeyDown }) {
  const handler = React.useRef();
  handler.current = onKeyDown;

  useEffect(() => {
    function handleKeyDown(event) {
      if (isHotKey(combo, event)) {
        event.preventDefault();
        handler.current(event);
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [combo]);
  return null;
}

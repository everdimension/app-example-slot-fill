## Reminder

To enable shortcuts toggle, do this:

1.
```
const [shortcutEnabled, setShortcutEnabled] = useState(true);
```

2. Find <Fill name="settings" />
Add to onChange:
```
setShortcutEnabled(event.target.checked);
```

3. Find <Fill name="keybindings" />
Add ternary to the return:

```
return shortcutEnabled ? (
  <Keybinding
    combo="ctrl+m"
    onKeyDown={() => history.push('/messages')}
  />
) : null;
```

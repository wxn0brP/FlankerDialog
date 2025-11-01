# FlankerDialog

A lightweight TypeScript library for creating UI dialogs and messages with animations. It provides a set of functions to display notifications, prompts, confirmations, and selection dialogs with a consistent, styled interface.

## Features

- **UI Messages**: Display temporary notifications with customizable timing, styling, and behavior
- **Prompts**: Create text input dialogs with OK/Cancel functionality 
- **Confirmations**: Get yes/no responses from users with customizable button text
- **Selection Dialogs**: Allow users to choose from a list of options
- **Date/Time Pickers**: Built-in support for time/date input dialogs
- **Styling**: Built-in SCSS styles with CSS variable support for easy theming
- **Animations**: Smooth fade-in/fade-out animations for dialogs and messages
- **Global Access**: Functions available via global `window.FD` object
- **Enhanced Localization**: Improved localization with proper $ escaping support

## Installation

```bash
npm install @wxn0brp/flanker-dialog
```

## Dependencies

This package has a peer dependency on `@wxn0brp/flanker-ui` version >=0.4.3, which must be installed separately:

```bash
npm install @wxn0brp/flanker-ui
```

## Usage

### Basic Setup

First, ensure the required CSS is loaded on your page. The library includes SCSS styles that you can customize or import directly.

Include the required DOM elements in your HTML:

```html
<div id="FD-message"></div>
<div id="FD-prompt"></div>
```

And then import the library:

```html
<link rel="stylesheet" href="../node_modules/@wxn0brp/flanker-dialog/dist/style.css">
<script src="../node_modules/@wxn0brp/flanker-ui/dist/html.js"></script>
<script src="../node_modules/@wxn0brp/flanker-dialog/dist/index.js"></script>
```

### UI Messages

Display a temporary message that disappears after a set time:

```typescript
import { uiMessage } from '@wxn0brp/flanker-dialog';

// Basic message (disappears after 6 seconds)
await uiMessage("Hello, world!");

// Message with options
await uiMessage("This is a warning!", {
    displayTime: 10000, // Show for 10 seconds
    className: "warning",
    backgroundColor: "#ff6b6b"
});
```

### Styled Messages

Display messages with built-in styling:

```typescript
import { uiMsg } from '@wxn0brp/flanker-dialog';

// Message styled with the default "uiMsg" class 
await uiMsg("This is a styled message!");
```

### Text with Localization

Display messages with localization support that properly handles $ characters:

```typescript
import { uiMsgT, setLangFunc } from '@wxn0brp/flanker-dialog';

// Set a localization function
setLangFunc((text, ...data) => {
    return text.replace(/\\\$|(?<!\\)\$/g, (match) => {
        if (match === "\\$") return "$";
        return data.shift()?.toString() || "$";
    });
});

// Use localized text with placeholders (use \$ to display literal $)
await uiMsgT("Hello, $s! Price: \\$10", "User");
```

### Prompt Dialog

Get text input from the user:

```typescript
import { prompt } from '@wxn0brp/flanker-dialog';

const response = await prompt("What's your name?", "Default value");
console.log(response); // Logs the user's input
```

### Confirmation Dialog

Get a yes/no response:

```typescript
import { confirm } from '@wxn0brp/flanker-dialog';

const result = await confirm("Are you sure?");
if (result) {
    console.log("User confirmed");
} else {
    console.log("User cancelled");
}

// Custom button text
const result = await confirm("Delete item?", "Yes, Delete", "Keep Item");
```

### Selection Prompt

Allow users to select from options:

```typescript
import { selectPrompt } from '@wxn0brp/flanker-dialog';

const options = ["Option 1", "Option 2", "Option 3"];
const values = ["val1", "val2", "val3"];

const selection = await selectPrompt("Choose an option:", options, values);
console.log(selection); // Logs the selected value

// With categorized options
const categories = [
    {
        name: "Category 1",
        options: ["Cat1-Opt1", "Cat1-Opt2"]
    },
    {
        name: "Category 2", 
        options: ["Cat2-Opt1", "Cat2-Opt2"]
    }
];

const selection = await selectPrompt("Choose:", options, values, categories);
```

### Date/Time Prompt

Get date or time input:

```typescript
import { promptTime } from '@wxn0brp/flanker-dialog';

// Get datetime input
const datetime = await promptTime("Select date and time:", "datetime-local");
console.log(datetime); // Logs the selected datetime in ISO format

// Get time input only
const time = await promptTime("Select time:", "time");
```

### Global Access

All functions are also available via the global `window.FD` object:

```javascript
// Access functions globally
window.FD.uiMessage("Hello from global!");
const response = await window.FD.prompt("Enter text:");
const confirmed = await window.FD.confirm("Continue?");
```

## Styling

The library includes SCSS styles that use CSS variables for theming:

```scss
:root {
  --accent: #your-accent-color;
  --accentRGB: your-rgb-values; // e.g. 255, 0, 0 for red
  --back: #your-background-color;
  --txt: #your-text-color;
}
```

## License

MIT

## Contributing

Please submit pull requests or open issues on GitHub.
📦 button-modular-library
A modular and customizable button component library built with React and CSS Modules.

🚀 Features
💅 Predefined variants: primary, secondary, submit, delete

📏 Multiple sizes: sm, md, lg

⚛️ Built with React & CSS Modules

🛠️ Easy to integrate and extend

📦 Installation
If you’ve published it to npm:

bash
Copy
Edit
npm install button-modular-library
If you're using it locally for development:

bash
Copy
Edit
npm install /path/to/button-modular-library
🔧 Usage
jsx
Copy
Edit
import { Button } from 'button-modular-library';

function App() {
  return (
    <>
      <Button variant="primary" size="md">Primary</Button>
      <Button variant="submit" size="sm">Submit</Button>
      <Button variant="secondary" size="sm">Secondary</Button>
      <Button variant="delete" size="lg">Delete</Button>
    </>
  );
}


🧩 Props

Prop	Type	Default	Description
variant	string	"primary"	Type of button (primary, submit, etc.)
size	string	"md"	Button size (sm, md, lg)
children	ReactNode	–	Button label or content


📁 File Structure

button-modular-library/
├── src/
│   ├── components/
│   │   └── Button.jsx
│   │   └── Button.module.css
│   └── index.js
├── dist/
├── package.json
├── vite.config.js
└── README.md

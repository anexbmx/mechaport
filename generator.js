const fs = require('fs');
const path = require('path');

// Get the component path from command line arguments
const componentPath = process.argv[2];

if (!componentPath) {
  console.error('Please provide a component path.');
  process.exit(1);
}

// Extract the component name from the provided path
const componentName = path.basename(componentPath);

// Convert component name to PascalCase
const pascalCaseName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

// Paths for the new files
const componentDir = path.join(__dirname, 'src', componentPath);
const componentFile = path.join(componentDir, `${pascalCaseName}.component.jsx`);
const styleFile = path.join(componentDir, `${pascalCaseName}.module.css`);

// Create component directory if it doesn't exist
if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

// Template for the component file
const componentTemplate = `import styles from './${pascalCaseName}.module.css';

export default function ${pascalCaseName}(props) {
  return <div>${pascalCaseName} Component</div>;
}
`;

// Template for the style file
const styleTemplate = `/* Styles for ${pascalCaseName} component */
`;

// Write the component file
fs.writeFileSync(componentFile, componentTemplate, 'utf8');

// Write the style file
fs.writeFileSync(styleFile, styleTemplate, 'utf8');

console.log(`Component ${pascalCaseName} created successfully\n\t✓ ${pascalCaseName}.component.jsx\n\t✓ ${pascalCaseName}.module.css`);

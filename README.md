# No Absolute Imports

The eslint-plugin-no-absolute-imports plugin is a custom ESLint rule that allows
you to verify and disallow absolute imports in your code.

## Installation

To use the `eslint-plugin-no-absolute-imports` plugin,
you first need to make sure you have ESLint installed in your project.
Then, you can install the plugin and its dependencies by running the following command:

```bash
npm install eslint eslint-plugin-no-absolute-imports

# or

yarn add eslint eslint-plugin-no-absolute-imports
```

## Configuration

Once you have installed the plugin, you can configure it in your
.eslintrc file or in the ESLint configuration file you use in your project.

Here's an example of a basic configuration:

```json
{
  "plugins": ["no-absolute-imports"],
  "rules": {
    "no-absolute-imports/no-absolute-imports": "error"
  }
}
```

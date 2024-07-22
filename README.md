# eslint-config-jaypie 🐦‍⬛🧹

Linting rules for Jaypie projects

## 🎯 Goals

Jaypie ecosystem coding style, Prettier, and bespoke rules found to improve development

## 📋 Usage

### Installation

```bash
npm install --save-dev eslint-config-jaypie
```

### Configuration

### ESLint 8.57.0 and 9+ "Flat" Config

#### Jaypie Alone

```javascript
// eslint.config.js
export { default as default } from "eslint-config-jaypie/flat";
```

#### Jaypie with Other configs

Jaypie's `flat` is an array that can be spread into another configuration.

```javascript
import jaypie from "eslint-config-jaypie/flat";
export default [
  ...jaypie
  // More configuration
];
```

#### Legacy

##### Base

```javascript
// .eslintrc.cjs
module.exports = {
  extends: ["jaypie"],
};
```

#### CommonJS

```javascript
module.exports = {
  extends: ["jaypie/commonjs"],
};
```

##### Vue

```javascript
module.exports = {
  extends: ["jaypie/vue"],
};
```

## 📝 Changelog

| Date       | Version | Summary        |
| ---------- | ------- | -------------- |
|  7/22/2024 |  1.0.10 | Supports base config on "eslint-config-jaypie/flat" for ESLint 9+ |
|  6/19/2024 |   1.0.7 | Adds `vue/` subdirectory support |
|   6/3/2024 |   1.0.0 | Initial release |
|   6/2/2024 |   0.1.0 | Initial deploy |
|   6/2/2024 |   0.0.1 | Initial commit |

## 📜 License

Published by Finlayson Studio. All rights reserved

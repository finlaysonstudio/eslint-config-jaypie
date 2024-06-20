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

#### Base

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

#### Vue

```javascript
module.exports = {
  extends: ["jaypie/vue"],
};
```

## 📝 Changelog

| Date       | Version | Summary        |
| ---------- | ------- | -------------- |
|  6/19/2024 |   1.0.7 | Adds `vue/` subdirectory support |
|   6/3/2024 |   1.0.0 | Initial release |
|   6/2/2024 |   0.1.0 | Initial deploy |
|   6/2/2024 |   0.0.1 | Initial commit |

## 📜 License

Published by Finlayson Studio. All rights reserved

# morsejs-render-svg

A plugin for morsejs to render translated messages as [Scalable Vector Graphic (SVG)](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics).

## Installation

### Dependency

```bash
npm install --save morsejs-render-svg
```

## Usage

```javascript
var mrsvg = require("morsejs/render/SVG");
mrsvg.graphMorse(mGraph, translatedMessage);
```
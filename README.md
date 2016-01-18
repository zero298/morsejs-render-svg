# morsejs-render-svg

[![Build Status](https://travis-ci.org/zero298/morsejs.svg?branch=master)](https://travis-ci.org/zero298/morsejs) [![Inline docs](http://inch-ci.org/github/zero298/morsejs-render-svg.svg?branch=master)](http://inch-ci.org/github/zero298/morsejs-render-svg)

A plugin for [morsejs](https://github.com/zero298/morsejs) to render translated messages as [Scalable Vector Graphic (SVG)](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics).

## Installation

### Dependency

```bash
npm install --save morsejs-render-svg
```

## Usage

```javascript
var morsejs = require("morsejs"),
    morsejsRenderSvg = require("morsejs-render-svg");
    
var svgElement = document.createElement("svg"),
    message = morsejs.translate("hello");
    
document.body.appendChild(svgElement);

morsejsRenderSvg.graphMorse(svgElement, message);
```
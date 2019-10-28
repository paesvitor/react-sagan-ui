# Sagan UI

![NPM](https://img.shields.io/npm/v/sagan-ui.svg)
[![Docs](https://img.shields.io/badge/read-docs-blue.svg)](https://react-sagan-ui.netlify.com/)

A React UI component library.
I created this library to develop fast and scalable design systems.

## Install

    yarn add sagan-ui

## Usage

- Wrap your application with ThemeProvider if you want a custom library configuration
- Create a themeConfig.js anywhere you want in your application and pass it as theme prop to ThemeProvider
- Check each Component Readme tab to see available props to your themeConfig

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Button } from 'sagan-ui';
//import themeConfig from 'path-to-your-themeConfig-file';

// Theme configuration to change default values
const themeConfig = {
    // Override default buttonSize [12] and changes global buttonSize to 18
    buttonSize: 18
    // Override primary color
    primaryColor: '#f4b556'
}

ReactDOM.render(
    <ThemeProvider theme={themeConfig}>
        <Button/>
    </ThemeProvider>,
    mountNode
);
```

## Developing

##### 1 - Install all dependencies

    npm install

##### 2 - Start development build

    npm start

##### 3 - Test your changes using Docz

    npm run docz:dev

##### 3.1 - Create a .mdx doc inside your component and import your component inside this file

```js
---
name: Alert
---

import { Playground, PropsTable } from 'docz'
import Alert from './Alert'

<Playground>
  <Alert text="secondary"/>
</Playground>

```

##### 4 - Test your changes using using link **(Check Usage guide to inject custom props)**

    // Use npm link inside sagan folder
    npm link

    // Then use npm link sagan-ui inside your project
    npm link sagan-ui

# Sagan UI

![NPM](https://img.shields.io/npm/v/sagan-ui.svg)
[![Docs](https://img.shields.io/badge/read-docs-blue.svg)](https://paesvitor.github.io/sagan)


A UI component library for Farfetch for test purpose

## Install

    npm install --save sagan-ui

## Usage

 - Wrap your application with ThemeProvider if you want a custom library configuration
 - Create a themeConfig.js anywhere you want in your application and pass it as theme prop to ThemeProvider
 - Check each Component Readme tab to see available props to your themeConfig

~~~js
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Button } from 'sagan-ui';
//import themeConfig from 'path-to-your-themeConfig-file';

// Theme configuration to change default values
const themeConfig = {
    // Override default buttonSize [12] and changes global buttonSize to 18
    buttonSize: 18
}

ReactDOM.render(
    <ThemeProvider theme={themeConfig}>
        <Button/>
    </ThemeProvider>,
    mountNode
);
~~~

## Documentation
 - Check out [components documentation
](https://paesvitor.github.io/sagan)
# Sagan UI

A UI component library for Farfetch test propouses

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
// Provides library custom configuration
import themeConfig from 'path-to-your-themeConfig-file';

ReactDOM.render(
    <ThemeProvider theme={themeConfig}>
        <Button/>
    </ThemeProvider>,
    mountNode
);
~~~

### Configuring themeConfig.js file
 - Each component have your own custom props, check readme tab for further information

~~~js
const themeConfig = {
    // Intercepts default buttonSize [12] and changes global buttonSize to 18
    buttonSize: 18
}

export default themeConfig
~~~
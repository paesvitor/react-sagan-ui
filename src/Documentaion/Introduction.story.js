import React from 'react'
import { storiesOf } from '@storybook/react'
import MainReadme from '../../readme.md';
import { doc } from 'storybook-readme';


storiesOf('Sagan', module).add('Introduction', doc(MainReadme));

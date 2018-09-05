import React from 'react'
import { storiesOf } from '@storybook/react'
import ButtonReadme from './Introduction.md';
import { doc } from 'storybook-readme';

import { setOptions } from '@storybook/addon-options';


storiesOf('Sagan', module).add('Introduction', doc(ButtonReadme));

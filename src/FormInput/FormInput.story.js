import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme';
import MD from './FormInput.md'
import FormInput from './FormInput'

const stories = storiesOf('Components/Form', module)

stories.addDecorator(withKnobs)
stories.addDecorator(withReadme(MD))
// Knobs as dynamic variables.
stories.add('Input', withInfo(`
~~~js
import { Card } from 'sagan-ui' 
~~~

`)(() => {


  return (<FormInput placeholder="Form"/>)
}))

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'
import MD from './FormInput.md'
import Input from './Input'

const stories = storiesOf('Components/Form', module)

stories.addDecorator(withKnobs)
stories.addDecorator(withReadme(MD))
// Knobs as dynamic variables.
stories.add('Input', withInfo(`
~~~js
import { Card } from 'sagan-ui' 
~~~

`)(() => {
  return (<Input placeholder='Form' />)
}))

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs/react'
import ButtonGroup from './ButtonGroup'
import Button from '../Button'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme';
import MD from './ButtonGroup.md'

const stories = storiesOf('Components', module)

stories.addDecorator(withKnobs)
stories.addDecorator(withReadme(MD))
// Knobs as dynamic variables.
stories.add('Button Group', withInfo(`
<h1 class="title">Button Group</h1>

~~~js
import { ButtonGroup, Button } from 'sagan-ui' 
~~~

`)(() => {
  const buttonSpacing = number('Button Spacing', 5)

  return (<ButtonGroup buttonSpacing={buttonSpacing}>
    <Button label='Button 1' type='success' />
    <Button label='Button 2' type='danger' />
    <Button label='Button 3' type='info' />
    <Button label='Button 4' type='warning' />
  </ButtonGroup>)
}))

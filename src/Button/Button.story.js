import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react'
import Button from './Button'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme';
import ButtonMD from './Button.md'

const stories = storiesOf('Components', module)

stories.addDecorator(withKnobs)
stories.addDecorator(withReadme(ButtonMD))
// Knobs as dynamic variables.
stories.add('Button', withInfo(`
~~~js
import { Button } from 'sagan-ui' 
~~~

`)(() => {
  const typeOptions = select('types', ['primary', 'secondary', 'success', 'danger', 'warning', 'info'], 'primary')
  const label = text('label', 'button label')
  const inverted = boolean('inverted', false)
  const fluid = boolean('fluid', false)
  const cornerOptions = select('corners', ['rounded', 'pill', 'none'], 'none')
  const sizeOptions = select('sizes', ['small', 'large', 'medium'], 'medium')
  const disabled = boolean('disabled', false)

  return (<Button
    type={typeOptions}
    label={label}
    disabled={disabled}
    inverted={inverted}
    corners={cornerOptions}
    size={sizeOptions}
    fluid={fluid} />)
}))

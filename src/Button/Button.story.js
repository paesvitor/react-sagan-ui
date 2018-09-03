import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react'
import Button from './Button'
import { withInfo } from '@storybook/addon-info'

const stories = storiesOf('Components', module)

stories.addDecorator(withKnobs)
// Knobs as dynamic variables.
stories.add('Button', withInfo(`
<h1>Button</h1>

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

  return (<Button
    type={typeOptions}
    label={label}
    inverted={inverted}
    corners={cornerOptions}
    size={sizeOptions}
    fluid={fluid} />)
}))

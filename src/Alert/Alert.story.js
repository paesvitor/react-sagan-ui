import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react'
import Alert from './Alert'
import { withInfo } from '@storybook/addon-info'

const stories = storiesOf('Components', module)

stories.addDecorator(withKnobs)
// Knobs as dynamic variables.
stories.add('Alert', withInfo(`
<h1>Alert</h1>

~~~js
import { Alert } from 'sagan-ui' 
~~~

`)(() => {
  const typeOptions = select('types', ['primary', 'secondary', 'success', 'danger', 'warning', 'info'], 'success')
  const label = text('label', 'This is a default Alert!')

  return (<Alert
    type={typeOptions}
    label={label}
  />)
}))

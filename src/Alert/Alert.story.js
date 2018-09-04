import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react'
import Alert from './Alert'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme';
import MD from './Alert.md'

const stories = storiesOf('Components', module)

stories.addDecorator(withKnobs)
stories.addDecorator(withReadme(MD))
// Knobs as dynamic variables.
stories.add('Alert', withInfo(`
<h1 class="title">Alert</h1>

~~~js
import { Alert } from 'sagan-ui' 
~~~

`)(() => {
  const typeOptions = select('types', ['success', 'danger', 'warning', 'info'], 'success')
  const AlertText = text('text', 'This is a default Alert!')
  const showDismiss = boolean('show dimiss', true)

  return (<Alert
    type={typeOptions}
    text={AlertText}
    showDismiss={showDismiss}
  />)
}))

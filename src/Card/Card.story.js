import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import Card from './Card'
import Button from '../Button'
import { withInfo } from '@storybook/addon-info'

const stories = storiesOf('Components', module)

stories.addDecorator(withKnobs)
// Knobs as dynamic variables.
stories.add('Card', withInfo(`
<h1 class="title">Card</h1>

~~~js
import { Card } from 'sagan-ui' 
~~~

`)(() => {
  const image = text('Image', 'https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/f24b4a7bf9f24d1ba5f899339e6949f3')
  const title = text('Title', 'Awesome Card Title')
  const content = text('Content', 'Card content')
  const date = text('Date', '15/09/2018')
  const footer = text('Footer', 'Click me')

  return (<Card
    image={image}
    title={title}
    content={content}
    date={date}
    footer={<Button label={footer} size='small' />}
  />)
}))

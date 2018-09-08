import React from 'react'
import { hot } from 'react-hot-loader'
import Theme from 'docz-theme-default'
import helpers from '../../src/utils/helpers'

import { imports } from './imports'
import db from './db.json'

const Root = () => (
  <Theme
    className='oi'
    helpers={helpers}
    db={db}
    imports={imports}
    hashRouter={false}
    websocketUrl="ws://127.0.0.1:60505"
  />
)

export default hot(module)(Root)

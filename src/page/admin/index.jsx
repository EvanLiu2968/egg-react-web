import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader';
import routes from '@admin/routes'
import { Store } from '@admin/store'
import './index.less'

ReactDOM.render(
  <Provider store={ Store }>
    { EASY_ENV_IS_DEV ? <AppContainer>{ routes }</AppContainer> : routes }
  </Provider>,
  document.getElementById('app')
)

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './App'
import store from './store/store'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()

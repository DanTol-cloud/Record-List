import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import App from './app.tsx'
import './index.css'
import { store } from './redux/store.ts'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

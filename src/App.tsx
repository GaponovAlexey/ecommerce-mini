import { Provider } from 'react-redux'
import { Header } from './components/Header'
import { Products } from './components/product/Products'
import { store } from './store/store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Products />
      </Provider>
    </div>
  )
}

export default App

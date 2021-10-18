import { NavBar } from './components'
import { Burger } from './containers'
import './App.css'

export const App = () => {
  return (
    <div className={'App'}>
      <NavBar />
      <div className={'container mt-5'}>
        <Burger />
      </div>
    </div>
  )
}

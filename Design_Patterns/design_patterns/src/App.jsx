import './App.css'
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import Mixin from './patterns/mixin/mixin'
import Observer from './patterns/observer/Observer'
import ProxyDesignPattern from './patterns/proxy/ProxyDesignPattern'
import Singleton from "./patterns/singleton/Singleton"

function App() {

  return (
    <>
      <Singleton/>
      <ProxyDesignPattern/>
      <Observer/>
      <Mixin/>
      <CounterOne name="counter-1"/>
      <CounterTwo name="counter-2"/>
    </>
  )
}

export default App

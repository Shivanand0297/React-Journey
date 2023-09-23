import './App.css'
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
    </>
  )
}

export default App

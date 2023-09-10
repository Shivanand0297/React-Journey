import './App.css'
import Observer from './patterns/observer/Observer'
import ProxyDesignPattern from './patterns/proxy/ProxyDesignPattern'
import Singleton from "./patterns/singleton/Singleton"

function App() {

  return (
    <>
      <Singleton/>
      <ProxyDesignPattern/>
      <Observer/>
    </>
  )
}

export default App

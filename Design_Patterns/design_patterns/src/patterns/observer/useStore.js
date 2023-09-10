import { useEffect, useState } from "react"
import { store } from "./store"

export const useStore = (initialValue) => {
  const [count, setCount] = useState(initialValue)
  useEffect(()=> {
    store.subscribe(setCount)
  }, [])

  return count
}
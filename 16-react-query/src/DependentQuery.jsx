import { useState } from "react"
import { useQuery } from "react-query"

const DependentQuery = () => {

  const fetcher = () => {
    return new Promise(resolve => {
      return setTimeout(resolve, 1000)
    })
  }

  // const query = useQuery(["key", 1], fetcher, {
  //   enabled: false  // when false query status will be idle
  // })

  const [value, setValue] = useState(false);

  // if userid is there then rendre the hook (run the query otherwise not)
  const query2 = useQuery(["key", 1], fetcher, {
    enabled: value    // it also allows us to conditionally render the hook, because we cannot use ifelse here
  })

  // console.log("query", query)
  // console.log("query states", query.status) // idle
  console.log("DependentQuery", query2)

  return (
    <>
      <div>DependentQuery</div>
      <button onClick={()=> setValue(v => !v)}>click me</button>
    </>
  )
}

export default DependentQuery
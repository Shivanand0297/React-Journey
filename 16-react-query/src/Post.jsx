import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import { client } from "./queryClientProvider"


const Posts = () => {

  const {data: posts, isLoading} = useQuery(
      "posts", 
      () => fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json()),
      {
        select: response => response.slice(0, 20) // to transform the data before it gets into the component
      }
    )


  if(isLoading){
    return "loading..."
  }

  return (
    <>
      <div>Posts</div>
      {posts.map(post => {
          const cachedData = client.getQueryData(["posts", post.id]) //cachedData
          const setQueryData = () => {
            client.setQueryData(["posts", post.id], (previous => {
              return {
                ...previous,
                title: "title mutated"
              }
            }))
          }
        return(
          <Link to={`${post.id}`} key={post.id}>
            <p><span>{post.id}:</span> {post.title} <b>{cachedData ? "(Visited)" : null}</b></p>
            <button onClick={setQueryData} >Mutate title</button>
          </Link>
        )
      })}
    </>
  )
}

export default Posts
import { useQuery } from "react-query"
import { Link } from "react-router-dom"


const Posts = () => {

  const {data: posts, isLoading} = useQuery("posts", () => fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json()))


  if(isLoading){
    return "loading..."
  }

  return (
    <>
      <div>Posts</div>
      {posts.map(post => (
        <Link to={`${post.id}`} key={post.id}>
          <p><span>{post.id}:</span> {post.title}</p>
        </Link>
      ))}
    </>
  )
}

export default Posts
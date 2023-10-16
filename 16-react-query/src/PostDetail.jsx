import { useQuery } from "react-query"
import { Link, useParams } from "react-router-dom"


const PostDetail = () => {

  const {id} = useParams()

  const {data: postData, isLoading} = useQuery(
      ["posts", Number(id)], 
      () => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(data => data.json()),
      {
        enabled: Boolean(id),  //if id is present then only run the hook
        // cacheTime: 5 * 1000, //always get the data from api
        // staleTime: 5 * 1000 //5sec it will put data in stale state after 5sec
      }
    )


  if(isLoading){
    return "loading..."
  }

  return (
    <>
    <Link to="/posts">Go Back</Link>
      <div>
        <p>id: {postData.id}</p>
        <p>title: {postData.title}</p>
        <p>body: {postData.body}</p>
      </div>
    </>
  )
}

export default PostDetail
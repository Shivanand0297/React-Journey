import { useQuery } from "react-query"
import { useParams } from "react-router-dom"


const PostDetail = () => {

  const {id} = useParams()

  const {data: postData, isLoading} = useQuery(
      ["posts", Number(id)], 
      () => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(data => data.json()),
      {
        enabled: Boolean(id)
      }
    )


  if(isLoading){
    return "loading..."
  }

  return (
    <>
      <div>
        <p>id: {postData.id}</p>
        <p>title: {postData.title}</p>
        <p>body: {postData.body}</p>
      </div>
    </>
  )
}

export default PostDetail
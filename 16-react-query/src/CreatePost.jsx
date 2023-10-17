import { useMutation } from "react-query";

const CreatePost = () => {
  const pause = (duration, param) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        const value = Math.floor(Math.random() * 10);
        if (value < 5) {
          reject(`Rejected Value: ${value}`);
        } else {
          resolve(`Resolved Value: ${value}`);
        }
        alert("RUNNING");
        console.log("param", param);
      }, duration)
    );
  };

  const mutation = useMutation((param) => pause(1000, param), {
    onSuccess: (data) => alert(data),
    onError: (error) => alert(error),
  });

  const callMutation = async () => {
    alert("call mutation called");
    await mutation.mutateAsync("some form data");
    alert("FINISHED");
  };

  return (
    <>
      <div onClick={callMutation}>Mutations</div>
    </>
  );
};

export default CreatePost;

import axios from "axios";
import { useState } from "react";

const App = () => {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");
  const [progress, setProgress] = useState({
    started: false,
    progressCount: 0,
  });

  const handleUpload = async () => {
    // checking if file is present or not
    if (!file) {
      setMsg("No file selected");
      return;
    }
    // if file is selected then continue

    const fd = new FormData();
    fd.append("file", file);
    // Note: form data obj (fd) is important here
    // 1. it will set the post request headers automatically.
    // 2. it also supports multiple files.
    // 3. it send the data in the same formate as of html form element.

    try {
      setMsg("Uploading...");
      setProgress((progress) => ({
        ...progress,
        started: true,
      }));
      const { data } = await axios.post("http://httpbin.org/post", fd, {
        onUploadProgress: (progressEvent) => {
          setProgress((progress) => ({ ...progress, progressCount: progressEvent.progress * 100 }));
        },
        headers: {
          "Custom-Header": "value",
        },
      });
      if (data) {
        setMsg("Upload Completed :)");
        console.log("data", data);
      }
    } catch (error) {
      setMsg("Upload Failed ;(");
      console.error("error", error);
    }
  };

  return (
    <>
      <h1>Uploading files in react</h1>
      <div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <button onClick={handleUpload}>Upload</button>
      {progress.started && <progress max="100" value={progress.progressCount}></progress>}
      <div>
        {msg && <span>{msg}</span>}
      </div>
    </>
  );
};

export default App;

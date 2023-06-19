import axios from "axios";
import { useState } from "react";

const App = () => {
  const [files, setfiles] = useState(null);
  const [msg, setMsg] = useState("");
  const [progress, setProgress] = useState({
    started: false,
    progressCount: 0,
  });

  const handleUpload = async () => {
    // checking if files is present or not
    if (!files) {
      setMsg("No files selected");
      return;
    }
    // if files is selected then continue

    const fd = new FormData();
    
    for (let i = 0; i < files.length; i++) {
      fd.append(`file${i}`, files[i])      
    }

    // fd.append("files", files);
    
    // Note: form data obj (fd) is important here
    // 1. it will set the post request headers automatically.
    // 2. it also supports multiple filess.
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
      <h1>Uploading filess in react</h1>
      <div>
        {/* <input type="files" onChange={(e) => setfiles(e.target.files[0])} /> */}
        <input 
          type="file" 
          multiple
          onChange={(e) => setfiles(e.target.files)} 
          // onChange={(e) => setfiles(e.target.files[0])} 
        />
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

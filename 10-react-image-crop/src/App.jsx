import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaDownload, FaFileUpload } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

//  react-image-crop css
import "react-image-crop/dist/ReactCrop.css";

import ReactCrop from "react-image-crop";

const App = () => {
  // input file ref
  const imageRef = useRef(null);

  // state to store file
  const [image, setImage] = useState(null);

  const rcImageref = useRef();

  // canvasref
  const canvasRef = useRef();

  // crop option
  const [crop, setCrop] = useState({
    unit: "px",
    aspect: 1,
    height: 150,
    width: 150,
    x: 0,
    y: 107,
  });

  // completed crop state
  const [completedCrop, setCompletedCrop] = useState(null);

  const handleImageChanged = (e) => {
    const { files } = e.target; //this file will be a array of selected files

    if (files && files.length > 0) {
      // creating file url
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result?.toString() || ""); //after file load, setting file in setImage
      });
    }
  };

  const handleOnLoad = useCallback((img) => {
    console.log("onImageLoaded called")
    rcImageref.current = img;
    console.log(rcImageref.current)
  }, []);

  // function to clear image

  const clearImage = () => {
    setImage(null);
    setCompletedCrop(null);
    setCrop({
      unit: "px",
      aspect: 1,
      height: 150,
      width: 150,
      x: 0,
      y: 107,
    });
  };

  useEffect(() => {
    // running canvas to show preview on every crop
    if (!completedCrop || !rcImageref) {
      return ;
    }

    const rc_image = rcImageref.current;
    const canvas = canvasRef.current;

    const crop = completedCrop;

    const scaleX = rc_image.naturalWidth / rc_image.width;
    const scaleY = rc_image.naturalHeight / rc_image.height;

    // getting pixel ratio to find the cordinates of sx, sy, dx, dy
    const pixelRatio = window.devicePixelRatio;

    // destination image width and height
    const dImageWidth = crop.width * scaleX;
    const dImageHeight = crop.height * scaleY;

    canvas.width = dImageWidth * pixelRatio;
    canvas.height = dImageHeight * pixelRatio;

    const ctx = canvas.getContext("2d");
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "large";
    ctx.imageSmoothingEnabled = true;

    ctx.drawImage(
      rc_image,
      crop.x * scaleX,
      crop.y * scaleY,
      dImageWidth,
      dImageHeight,
      0,
      0,
      dImageWidth,
      dImageHeight
    );
  }, [completedCrop]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 col-md-4 col-lg-4">
          <div className="d-flex justify-content-center mb-2">
            <input
              type="file"
              name="avatar"
              accept="image/*"
              ref={imageRef}
              onChange={handleImageChanged}
              className="d-none"
            />
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => imageRef.current.click()}
            >
              <FaFileUpload />
            </button>
            <button
              type="button"
              className="btn btn-danger mx-2"
              onClick={clearImage}
            >
              <AiOutlineClose />
            </button>
            <button type="button" className="btn btn-success mx-2">
              <FaDownload />
            </button>
          </div>
          <canvas className="w-100 h-75" ref={canvasRef}></canvas>
        </div>
        <div className="col-8 col-md-8 col-lg-8">
          {image && (
            <ReactCrop
              src={image}
              crop={crop}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={1}
              // onImageLoaded={handleOnLoad}
            >
              <img src={image} alt="avatar" onLoad={handleOnLoad} />
            </ReactCrop>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
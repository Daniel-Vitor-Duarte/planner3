import React, { useEffect, useref } from "react";
import { Video, CloudinaryContext } from "Cloudinary-react";
import { useInView } from "react-intersection-observer";

const VidPlayer = React.memo(({ videoref }) => {
    return (
      <CloudinaryContext cloud_name="codedog">
        <Video
          publicId="videoplayer-demo"
          width="100%"
          controls
          innerref={videoref}
        />
      </CloudinaryContext>
    );
  });

  const VideoPlayer = () => {
    const videoref = useref();
    const { ref, inView } = useInView({
      threshold: 0
    });
    useEffect(() => {
      if (inView === true) {
        videoref.current.play();
      }
    });
    return (
      <div ref={ref}>
        <VidPlayer videoref={videoref} />
      </div>
    );
  };
  export default VideoPlayer;
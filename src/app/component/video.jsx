"use client";
import videoFull from "../../public/video-component-2-full-screen.mp4";
import videoPhone from "../../public/video-component-2-phone.mp4";

const video = () => {
    return (
        <div className="w-full">
            <video controls autostart autoPlay src={videoFull} type={}/>
        </div>
    )
}
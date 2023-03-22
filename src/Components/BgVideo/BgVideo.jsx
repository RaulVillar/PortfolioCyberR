import React from "react"
import VideoBg from "../../Assets/Video/CyberWallpaper.mp4"
import "./BgVideo.css"

export default function BgVideo() {
    return (
        <div className="BgVideo">
           <video src={VideoBg} autoPlay loop muted />
        </div>
    )
}
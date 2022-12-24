import { useEffect, useState } from "react";
import { BiExitFullscreen } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";

const FullScreenPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const mediaStyles =
    window.innerHeight >= window.innerWidth
      ? { height: "auto", width: `${viewportWidth}px` }
      : { height: `${viewportHeight}px`, width: "auto" };
  const containerStyles = window.innerWidth < 850 ? { height: viewportHeight, width: viewportWidth } : { height: "100%", width: "100%" }

   
    const getMediaUrl = () => {
        const baseUrl = {
            redd: "https://i.redd.it/",
            imgur: "https://i.imgur.com/"
        };
        const urlType = params.id.split("-")[0];
        const mediaId = params.id.split("-")[1];
        return baseUrl[urlType] + mediaId;
    }

    useEffect(() => {
        const handleResize = () => {
          setViewportHeight(window.innerHeight);
          setViewportWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => document.removeEventListener("resize", handleResize);
      });
    

    return (
        <div className="full-screen-container" style={containerStyles}>
            <div className="media-wrapper">
                <img
                    src={getMediaUrl()}
                    alt={""}
                    className={`media full-screen`}
                    style={mediaStyles}
                />
            </div>

            <button onClick={()=> navigate(-1)} className="full-screen exit">
                <BiExitFullscreen className="icon" />
            </button>
        </div>
    )
}

export default FullScreenPage;
// import { useEffect, useState } from "react";
// import { BiExitFullscreen } from "react-icons/bi";
// import { useNavigate, useParams } from "react-router-dom";

// const FullScreenPage = () => {
//   console.log("FullScreenPage");
//   const paramsId = useParams().id;
//   const navigate = useNavigate();
//   const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
//   const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
//   const mediaStyles =
//     window.innerHeight >= window.innerWidth
//       ? { maxHeight: "auto", maxWidth: `${viewportWidth}px` }
//       : { maxHeight: `${viewportHeight}px`, maxWidth: "auto" };
//   const containerStyles =
//     window.innerWidth < 850
//       ? { height: viewportHeight, width: viewportWidth }
//       : { height: "100%", width: "100%" };

//   const getMediaUrl = () => {
//     const baseUrl = {
//       redd: "https://i.redd.it/",
//       imgur: "https://i.imgur.com/",
//     };

//     const urlType = paramsId.split("-")[0];
//     const mediaId = paramsId.split("-")[1];
//     return baseUrl[urlType] + mediaId;
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setViewportHeight(window.innerHeight);
//       setViewportWidth(window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => document.removeEventListener("resize", handleResize);
//   });

//   return (
//     <div className="full-screen-page" style={containerStyles}>
//       <img
//         src={getMediaUrl()}
//         alt={"full screen img"}
//         className={`media full-screen`}
//         style={mediaStyles}
//       />

//       <button
//         onClick={() => navigate(-1)}
//         className="full-screen exit"
//         style={{ height: `${viewportHeight}px` }}
//       >
//         <BiExitFullscreen className="icon" />
//       </button>
//     </div>
//   );
// };

// export default FullScreenPage;

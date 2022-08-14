import Tile from "./Tile";

const EmbedGal = ({ child, index }) => {
  const gallery = child.gallery;
   
  return gallery.map((media, i) => {
    const imgId = media.id;
    const fileExtension = "." + media.fileType.slice(-3);
    //console.log(`https://i.redd.it/${imgId}${fileExtension}`);
    return (
      <Tile
        src={`https://i.redd.it/${imgId}${fileExtension}`}
        alt="mainImg"
        isVideo={child.isVideo}
        videoUrl={child.videoUrl}
        key={`gal-${index}-img${i}`}
      />
    );
  });
};

export default EmbedGal;

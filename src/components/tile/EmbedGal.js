import Tile from "./Tile";

const EmbedGal = ({ child, index }) => {
    const gallery = Object.values(child.gallery).map((img) => {
        return {
          fileType: img.m,
          id: img.id,
        };
      });
   
  return gallery.map((media, i) => {
    const imgId = media.id;
    const fileExtension = "." + media.fileType.slice(-3);
    //console.log(`https://i.redd.it/${imgId}${fileExtension}`);
    return (
      <Tile
        src={`https://i.redd.it/${imgId}${fileExtension}`}
        alt="mainImg"
        key={`gal-${index}-img${i}`}
        type="gal"
      />
    );
  });
};

export default EmbedGal;

import "./galleriesShelf.css";

const GalleriesShelf = () => {
  const galleryFrame = <li className="galleryFrame"></li>;
  const galleryFrames = [];
  for (let i = 0; i < 5; i++) {
    galleryFrames.push(galleryFrame);
  }
  console.log(galleryFrames);
  return (
    <div className="shelfWrapper">
      <h2>Now on View</h2>
      <ul className="galleriesShelf">{galleryFrames.map((gf, index) => (
        <li key={"galleryFrame-" + index}>{gf}</li>
      ))}</ul>
    </div>
  );
};

export default GalleriesShelf;

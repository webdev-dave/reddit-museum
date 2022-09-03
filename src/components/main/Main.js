import PostContainer from "../tile/PostContainer";

const Main = () => {
  return (
    <section className="posts-section">
      <img src="https://i.redd.it/msrify3mu0i91.png" alt="" />
      <div className="userAlert">
        <h3>Be aware!!</h3>
        <p>
          Project is currently in development mode and is being updated almost
          daily. All features are subject to change.
        </p>
      </div>
      <PostContainer />
    </section>
  );
};

export default Main;

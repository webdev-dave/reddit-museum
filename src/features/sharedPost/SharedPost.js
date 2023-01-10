// import PostContainer from "../../components/posts/post/PostContainer";
// import { formatRedditDataChildren } from "../../utils/helperFunctions";

const SharedPost = (sharedPostUrl) => {
  const tempSearchTerm =
    "/r/filmphotography/comments/107f9lw/shoreline_kentmere_400_canon_a1_fd_50_f18/";
  const fetchRedditPost = async (searchTerm) => {
    const data = await fetch(`https://www.reddit.com${searchTerm}.json`);
    const json = await data.json();
    console.log(json);
    return json;
  };
  
  //next step is to add a method to redditApi request to handle shared post requests
  //after receiving and processing data, the method should then push (splice) the shared post to the beginning of the stack of currentPostsOnDisplay  
  fetchRedditPost(tempSearchTerm);
  
  
  
  //   return <PostContainer post={{}} postIndex={"shared"} />;
};

export default SharedPost;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  hasError: false,
  isLoaded: false,
  genreName: 'ai',
  genrePath: "/r/aiArt/",
  redditData: {
    kind: "",
    postsArrLength: "",
    posts: [],
  },
  processedPosts: [],
};

export const fetchRedditInfo = createAsyncThunk(
  "apiRequest/fetchRedditInfo",
  async (searchTerm, thunkAPI) => {
    const data = await fetch(`https://www.reddit.com${searchTerm}.json`);
    //console.log(`https://www.reddit.com${searchTerm}`)
    const json = await data.json();
    return json;
  }
);

const apiRequestSlice = createSlice({
  name: "apiRequest",
  initialState: initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genreName = action.payload.genreName;
      state.genrePath = action.payload.path;
    },
    updateSortedGalleries: (state, action) => {
      const postIndex = action.payload.postIndex;
      state.processedPosts[postIndex] = action.payload.value;
    }
  },
  extraReducers: {
    [fetchRedditInfo.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
     
    },
    [fetchRedditInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.isLoaded = true;

      //state.redditData.experiment = action.payload.data.children[8].data.gallery_data;
      state.redditData.initObj = action.payload.data;

      state.redditData.kind = action.payload.kind;
      state.redditData.postsArrLength = action.payload.data.dist;
      state.redditData.posts = action.payload.data.children.map(
        (child) => {
          return {
            isGallery: child.data.is_gallery ? true : false,
            thumbnail: child.data.thumbnail,
            title: child.data.title,
            child: child,
            srcUrl: child.data.url_overridden_by_dest,
            redditGalleryOrder:
              child.data.is_gallery &&
              child.data.gallery_data.items.map((img) => img.media_id),
            //extendedGallery: child.data.is_gallery && child.data.gallery_data.items.map(img => img.media_id),
            initialGallery:
              child.data.is_gallery &&
              Object.values(child.data.media_metadata).map((img, idx) => {
                return {
                  fileType: img.m,
                  id: img.id,
                  imgIndex: null,
                  headerImg: "unknown",
                  isVideo: false,
                  videoUrl: null,
                  mediaType: img.e,
                  y: img.s.y,
                  x: img.s.x,
                  backupUrl: img.s.u,
                  title: child.data.title,
                };
              }),

            voteCount: child.data.ups,
            subreddit: child.data.subreddit_name_prefixed,
            author: child.data.author,
            authorUrl: "https://www.reddit.com/user/" + child.data.author,
            date: child.data.created_utc,
            redditPostUrl: "https://www.reddit.com" + child.data.permalink,
            redditMediaViewer: child.data.url,

            //extraTGallery: child.data.is_gallery && child.data.gallery_data.items,
          };
        }
      );
    },
    [fetchRedditInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
      state.isLoaded = false;
      state.redditData.errorMessage = action.payload;
    },
  },
});

export const selectLoadedStatus = (state) => state.apiRequest.isLoaded;
export const selectGenreName = (state) => state.apiRequest.genreName;
export const selectGenrePath = (state) => state.apiRequest.genrePath;
export const selectPosts = (state) => state.apiRequest.redditData.posts;
export const selectIsGallery = (state) => state.apiRequest.redditData.isGallery;

export const {updateSortedGalleries, changeGenre} = apiRequestSlice.actions;

export default apiRequestSlice.reducer;

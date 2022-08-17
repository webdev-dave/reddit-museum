import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  hasError: false,
  isLoaded: false,
  redditData: {
    kind: "",
    childrenArrLength: "",
    children: [],
  },
};

export const fetchRedditInfo = createAsyncThunk(
  "exp/fetchRedditInfo",
  async (searchTerm, thunkAPI) => {
    const data = await fetch(`https://www.reddit.com${searchTerm}.json`);
    //console.log(`https://www.reddit.com${searchTerm}.json`)
    const json = await data.json();
    return json;
  }
);

const mainSlice = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchRedditInfo.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
      state.isLoaded = false;
    },
    [fetchRedditInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.isLoaded = true;

      //state.redditData.experiment = action.payload.data.children[8].data.gallery_data;
      state.redditData.initObj = action.payload.data;

      state.redditData.kind = action.payload.kind;
      state.redditData.childrenArrLength = action.payload.data.dist;
      state.redditData.children = action.payload.data.children.map(
        (child) => {
          return {
            isGallery: child.data.is_gallery ? true : false,
            isVideo: child.data.is_video,
            thumbnail: child.data.thumbnail,
            title: child.data.title,

            imgUrl: child.data.url_overridden_by_dest,
            videoUrl:
              child.data.is_video &&
              child.data.secure_media.reddit_video.fallback_url,
            redditGalleryOrder:
              child.data.is_gallery &&
              child.data.gallery_data.items.map((img) => img.media_id),
            //extendedGallery: child.data.is_gallery && child.data.gallery_data.items.map(img => img.media_id),
            initialGallery:
              child.data.is_gallery &&
              Object.values(child.data.media_metadata).map((img, i) => {
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

export const selectLoadedStatus = (state) => state.main.isLoaded;
export const selectExpImg = (state) => state.main.redditData.expImg;
export const selectChildren = (state) => state.main.redditData.children;
export const selectIsGallery = (state) => state.main.redditData.isGallery;

export default mainSlice.reducer;

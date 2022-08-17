import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  hasError: false,
  isLoaded: false,
  redditData: {
    kind: "",
    childrenArrLength: "",
    children: [
      // {
      //   isGallery: null,
      //   isVideo: null,
      //   thumbnail: null,
      //   title: null,

      //   imgUrl: "",
      //   videoUrl: "",
      //   redditGalleryOrder: null,
      //   gallery: {
      //     fileType: null,
      //     id: null,
      //     imgIndex: null,
      //     headerImg: null,
      //     isVideo: null,
      //     videoUrl: null,
      //     mediaType: null,
      //     y: null,
      //     x: null,
      //     backupUrl: null,
      //   },

      //   voteCount: null,
      //   subreddit: null,
      //   author: null,
      //   authorUrl: null,
      //   date: null,
      //   redditPostUrl: null,
      //   redditMediaViewer: null,
      // },
    ],
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
        (element) => {
          return {
            isGallery: element.data.is_gallery ? true : false,
            isVideo: element.data.is_video,
            thumbnail: element.data.thumbnail,
            title: element.data.title,

            imgUrl: element.data.url_overridden_by_dest,
            videoUrl:
              element.data.is_video &&
              element.data.secure_media.reddit_video.fallback_url,
            redditGalleryOrder:
              element.data.is_gallery &&
              element.data.gallery_data.items.map((img) => img.media_id),
            //extendedGallery: element.data.is_gallery && element.data.gallery_data.items.map(img => img.media_id),
            gallery:
              element.data.is_gallery &&
              Object.values(element.data.media_metadata).map((img, i) => {
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

            voteCount: element.data.ups,
            subreddit: element.data.subreddit_name_prefixed,
            author: element.data.author,
            authorUrl: "https://www.reddit.com/user/" + element.data.author,
            date: element.data.created_utc,
            redditPostUrl: "https://www.reddit.com" + element.data.permalink,
            redditMediaViewer: element.data.url,

            //extraTGallery: element.data.is_gallery && element.data.gallery_data.items,
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

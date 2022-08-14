import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  hasError: false,
  isLoaded: false,
  redditData: {
    kind: "",
    childrenArrLength: "",
    children: [],
    initObj: "",
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
            isVideo: element.data.secure_media ? true : false,
            
            thumbnail: element.data.thumbnail,
            imgUrl: element.data.url_overridden_by_dest,
            videoUrl:
              element.data.secure_media &&
              element.data.secure_media.reddit_video.fallback_url,
            
            gallery: element.data.is_gallery && Object.values(element.data.media_metadata).map((img) => {
              return {
                fileType: img.m,
                id: img.id,
              };
            }),

            //extendedGallery: element.data.media_metadata,
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

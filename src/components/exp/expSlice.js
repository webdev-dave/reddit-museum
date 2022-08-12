import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  hasError: false,
  isLoaded: false,
  redditData: {
    experiment: "",
    kind: "",
    childrenArrLength: "",
    children: [],
    isGallery: "",
    thumbnail: "",
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

const expSlice = createSlice({
  name: "exp",
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
            isGallery: element.data.is_gallery
              ? element.data.is_gallery
              : false,
            thumbnail: element.data.thumbnail,
            imgUrl: element.data.url_overridden_by_dest,
            gallery: element.data.media_metadata,
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

export const selectLoadedStatus = (state) => state.exp.isLoaded;
export const selectExpImg = (state) => state.exp.redditData.expImg;
export const selectChildren = (state) => state.exp.redditData.children;
export const selectIsGallery = (state) => state.exp.redditData.isGallery;

export default expSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  hasError: false,
  isLoaded: false,
  errorMessage: '',
  redditData: {
    kind: '',
    isGallery: '',
    expImg: '',
    thumbnail: '',
    children: '',
    initObj: '',
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

      state.redditData.initObj = action.payload;
      state.redditData.kind = action.payload.kind;
      state.redditData.isGallery = action.payload.data.children[18].data.is_gallery
      state.redditData.children = action.payload.data.children[18]
      state.redditData.expImg = action.payload.data.children[18].data.url_overridden_by_dest;
      state.redditData.thumbnail = action.payload.data.children[18].data.thumbnail;


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
export const selectThumbnail = (state) => state.exp.redditData.thumbnail;
export const selectIsGallery = (state) => state.exp.redditData.isGallery;

export default expSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { formatRedditDataChildren } from "../../utils/helperFunctions";

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
};

export const fetchRedditInfo = createAsyncThunk(
  "redditApiRequest/fetchRedditInfo",
  async (searchTerm, thunkAPI) => {
    const data = await fetch(`https://www.reddit.com${searchTerm}.json`);
    //console.log(`https://www.reddit.com${searchTerm}`)
    const json = await data.json();
    return json;
  }
);

const redditApiRequestSlice = createSlice({
  name: "redditApiRequest",
  initialState: initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genreName = action.payload.genreName;
      state.genrePath = action.payload.path;
      
    },
    updateSortedGalleries: (state, action) => {
      const postIndex = action.payload.postIndex;
      state.processedPosts[postIndex] = action.payload.value;
    },
    updateDisplayLoadingArray: (state, action) => {
      state.displayLoadingArray = action.payload.value;
    },
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
      state.redditData.posts = action.payload.data.children && formatRedditDataChildren(action.payload.data.children);
      console.log(state.redditData.posts);
    },
    [fetchRedditInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
      state.isLoaded = false;
      state.redditData.errorMessage = action.payload;
    },
  },
});

export const selectLoadedStatus = (state) => state.redditApiRequest.isLoaded;
export const selectGenreName = (state) => state.redditApiRequest.genreName;
export const selectGenrePath = (state) => state.redditApiRequest.genrePath;
export const selectPosts = (state) => state.redditApiRequest.redditData.posts;
export const selectIsGallery = (state) => state.redditApiRequest.redditData.isGallery;

export const {updateSortedGalleries, changeGenre} = redditApiRequestSlice.actions;

export default redditApiRequestSlice.reducer;

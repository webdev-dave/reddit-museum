import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../components/main/mainSlice';
import postsReducer from '../components/posts/postsSlice';


const store = configureStore({
  reducer: {
    posts: postsReducer,
    main: mainReducer,
    
  }
});

export default store;
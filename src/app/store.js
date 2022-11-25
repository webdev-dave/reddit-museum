import { configureStore } from '@reduxjs/toolkit';
import apiRequestReducer from '../features/apiRequest/apiRequestSlice';
import postsReducer from '../components/posts/postsSlice';
import featuresReducer from '../features/featuresSlice';


const store = configureStore({
  reducer: {
    features: featuresReducer,
    posts: postsReducer,
    apiRequest: apiRequestReducer,
  }
});

export default store;
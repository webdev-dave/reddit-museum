import { configureStore } from '@reduxjs/toolkit';
import redditApiRequestReducer from '../features/apiRequests/redditApiRequestSlice';
import postsReducer from '../components/posts/postsSlice';
import featuresReducer from '../features/featuresSlice';



const store = configureStore({
  reducer: {
    features: featuresReducer,
    redditApiRequest: redditApiRequestReducer,
    posts: postsReducer,

  }
});

export default store;
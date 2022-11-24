import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../components/main/mainSlice';
import genresReducer from '../components/header/genres/genresSlice';
import postsReducer from '../components/posts/postsSlice';
import featuresReducer from '../features/featuresSlice';


const store = configureStore({
  reducer: {
    features: featuresReducer,
    genres: genresReducer,
    posts: postsReducer,
    main: mainReducer,
  }
});

export default store;
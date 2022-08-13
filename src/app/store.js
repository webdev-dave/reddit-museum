import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../components/main/mainSlice';


const store = configureStore({
  reducer: {
    main: mainReducer
  }
});

export default store;
import { configureStore } from '@reduxjs/toolkit';
import expReducer from '../components/exp/expSlice';


const store = configureStore({
  reducer: {
    exp: expReducer
  }
});

export default store;
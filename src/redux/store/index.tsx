import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../reducers/modalReducer';
import modalEditReducer from '../reducers/modalEditReducer';


const store = configureStore({
  reducer: {
    modal: modalReducer, // Adicione o reducer ao store
    editModal: modalEditReducer, // Adicione o reducer ao store
  },
});

export default store;

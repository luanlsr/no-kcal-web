import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../reducers/modalReducer';
import modalEditReducer from '../reducers/modalEditReducer';
import createMetricsReducer from '../reducers/createMetricsReducer';


const store = configureStore({
  reducer: {
    modal: modalReducer, // Adicione o reducer ao store
    editModal: modalEditReducer, // Adicione o reducer ao store
    createMetrics: createMetricsReducer
  },
});

export default store;

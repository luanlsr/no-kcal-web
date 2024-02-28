import { createSlice } from '@reduxjs/toolkit';

const routerSlice = createSlice({
  name: 'createMetrics',
  initialState: {
    userId: null,
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setUserId } = routerSlice.actions;

export default routerSlice.reducer;

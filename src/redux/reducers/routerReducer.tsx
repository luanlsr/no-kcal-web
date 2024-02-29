import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pathname: '/',
};

const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    updatePathname: (state, action) => {
      state.pathname = action.payload;
    },
  },
});

export const { updatePathname } = routerSlice.actions;
export const selectPathname = (state: any) => state.router.pathname;

export default routerSlice.reducer;

// editModalSlice.js
import { User } from '@/models/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface EditModalState {
  isEditModalOpen: boolean;
  userEditData: User | null;
}

const initialState: EditModalState = {
  isEditModalOpen: false,
  userEditData: null,
};

const editModalSlice = createSlice({
  name: 'editModal',
  initialState,
  reducers: {
    openEditModal: (state, action: PayloadAction<User>) => {
      state.isEditModalOpen = true;
      state.userEditData = action.payload;
      console.log('redux', action.payload);

    },
    closeEditModal: state => {
      state.isEditModalOpen = false;
      state.userEditData = null;
    },
  },
});

export const { openEditModal, closeEditModal } = editModalSlice.actions;
export default editModalSlice.reducer;

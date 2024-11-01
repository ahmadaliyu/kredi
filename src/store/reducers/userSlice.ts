import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";

interface UserState {
  user: string;
}

const initialState: UserState = {
  user: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = undefined;
    },
  },
});

export const selectUserStore = (state: RootState) => state.user;
export const { logout, login } = userSlice.actions;
export default userSlice.reducer;

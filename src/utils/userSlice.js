import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (_state, action) => action.payload,
    removeUser: (_state, _action) => null,
  },
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

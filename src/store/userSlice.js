import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    deviceType: 'desktop',
  },
  reducers: {
    switchLogin(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    setDevice(state, action) {
      state.deviceType = action.payload.currentDevice;
      console.log(state.deviceType)
    },
  },
});

export const {
  switchLogin,
  setDevice,
} = userSlice.actions;

export default userSlice.reducer;

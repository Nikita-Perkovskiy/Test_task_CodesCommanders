import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const fetchUserByUsername = createAsyncThunk(
  "user/fetchUserByUsername",
  async (username: string) => {
    const baseQuery = fetchBaseQuery({
      baseUrl: "https://jsonplaceholder.typicode.com",
    });

    const result = await baseQuery({
      url: `/users?username=${username}`,
      method: "GET",
    });

    if (result.error) {
      throw new Error(result.error.data || "Failed to fetch user");
    }

    return (result.data as any[])[0];
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    isLoggedIn: false,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.userData = null;
      state.isLoggedIn = false;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByUsername.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserByUsername.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(fetchUserByUsername.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;

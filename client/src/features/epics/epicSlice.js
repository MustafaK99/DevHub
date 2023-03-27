import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import epicService from "./epicService";

const initialState = {
  epics: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createEpic = createAsyncThunk(
  "epics/create",
  async (epicData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await epicService.createEpic(epicData, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.respone.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteEpic = createAsyncThunk(
  "epics/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await epicService.deleteEpic(id, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.respone.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getEpics = createAsyncThunk(
  "epics/getAll",
  async (projectId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await epicService.getEpics(projectId, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.respone.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateEpic = createAsyncThunk(
  "projects/update",
  async (Data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await epicService.updateEpic(Data, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.respone.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const epicSlice = createSlice({
  name: "epic",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEpic.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEpic.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.epics.push(action.payload);
      })
      .addCase(createEpic.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getEpics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEpics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.epics = action.payload;
      })
      .addCase(getEpics.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteEpic.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEpic.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.epics = state.epics.filter(
          (epic) => epic._id !== action.payload.id
        );
      })
      .addCase(deleteEpic.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateEpic.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEpic.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.epics = [...state.epics, action.payload];
      })
      .addCase(updateEpic.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = epicSlice.actions;
export default epicSlice.reducer;

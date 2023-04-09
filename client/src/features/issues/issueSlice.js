import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import issueService from "./issueService";

const initialState = {
  issues: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createIssue = createAsyncThunk(
  "issues/create",
  async (issueData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await issueService.createIssue(issueData, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.respone.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteIssue = createAsyncThunk(
  "issues/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await issueService.deleteIssue(id, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.respone.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getIssues = createAsyncThunk(
  "issues/getAll",
  async (projectId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await issueService.getIssues(projectId, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.respone.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateIssue = createAsyncThunk(
  "issues/update",
  async (Data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await issueService.updateIssue(Data, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.respone.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const issueSlice = createSlice({
  name: "issue",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createIssue.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createIssue.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.epics.push(action.payload);
      })
      .addCase(createIssue.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getIssues.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIssues.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.epics = action.payload;
      })
      .addCase(getIssues.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteIssue.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteIssue.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.epics = state.epics.filter(
          (epic) => epic._id !== action.payload.id
        );
      })
      .addCase(deleteIssue.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateIssue.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateIssue.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.epics = [...state.epics, action.payload];
      })
      .addCase(updateIssue.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = issueSlice.actions;
export default issueSlice.reducer;

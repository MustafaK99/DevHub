import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    projects: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}


// create new project

export const createProject = createAsyncThunk('projects/create', async (projectData, thunkAPI) => {
    try {

        const token = thunkAPI.getState().auth.user.token
        return await projectService(projectData, token)

    } catch (error) {
        const message = ((error.response && error.response.data && error.respone.data.message) ||
            error.message || error.toString())

        return thunkAPI.rejectWithValue(message)

    }

})

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        reset: (state) => initialState
    }
})

export const { reset } = projectSlice.actions
export default projectSlice.reducer
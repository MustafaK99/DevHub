import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    projects: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}


export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        reset: (state) => initialState
    }
})

export const {reset} = projectSlice.actions
export default projectSlice.reducer
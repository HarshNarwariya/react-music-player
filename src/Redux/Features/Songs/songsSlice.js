import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export const fetchSongs = createAsyncThunk(
    'songs/fetchSongs',
    (dataFunction) => dataFunction()
)

const songsSlice = createSlice({
    name: 'songs',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchSongs.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchSongs.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(fetchSongs.rejected, (state, action) => {
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
    }
})

export default songsSlice.reducer
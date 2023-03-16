import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { getRandomAlbums } from "../../../FirebaseUtils/utils"


const initialState = {
    loading: false,
    data: [],
    error: ''
}

export const fetchAlbums = createAsyncThunk(
    'albums/fetchAlbums',
    (dataFunction) => dataFunction()
)

const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAlbums.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(fetchAlbums.rejected, (state, action) => {
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
    }
})

export default albumsSlice.reducer
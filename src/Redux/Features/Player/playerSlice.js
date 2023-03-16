import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: {
        thumbnail: "http://volna.volkovdesign.com/img/covers/cover.svg",
        original_name: "Epic Cinematic",
        album: "AudioPizza",
        url: "http://blast.volkovdesign.com/audio/12071151_epic-cinematic-trailer_by_audiopizza_preview.mp3",
        autoPlay: false,
    },
}

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setSong: (state, action) => {
            state.data = action.payload
            state.data.autoPlay = true
        }
    }
})

export const { setSong } = playerSlice.actions
export default playerSlice.reducer

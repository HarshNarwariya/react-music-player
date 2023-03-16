import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "./Features/Albums/albumsSlice";
import playerReducer from "./Features/Player/playerSlice";
import songsReducer from "./Features/Songs/songsSlice";



const store = configureStore({
    reducer: {
        songs: songsReducer,
        albums: albumsReducer,
        player: playerReducer
    },
})

export default store;
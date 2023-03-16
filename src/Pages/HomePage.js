import MainTitle from "../Components/MainTitle";
import Songs from "../Components/Songs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../Components/Breadcrumb";
import Releases from "../Components/Releases";
import { fetchAlbums } from "../Redux/Features/Albums/albumsSlice";
import { getRandomAlbums, getRandomSongs } from "../FirebaseUtils/utils"
import { fetchSongs } from "../Redux/Features/Songs/songsSlice";
import MainLoader from "../Components/MainLoader";

const HomePage = () => {
    const albums = useSelector(state => state.albums)
    const songs = useSelector(state => state.songs)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAlbums(getRandomAlbums))
        dispatch(fetchSongs(getRandomSongs))
    }, [])

    return <>
        <Breadcrumb items={[
            { title: "Home", url: "/" },
        ]} />
        {
            (albums.loading || songs.loading) ?
                <MainLoader/> :
                <>
                    <Releases title="Releases" data={albums.data} />
                    <MainTitle title="Songs" />
                    <Songs data={songs.data} />
                </>
        }
    </>;
};

export default HomePage;
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Artists from "../Components/Artists";
import MainLoader from "../Components/MainLoader";
import db from "../FirebaseUtils/config";
import { ArtistsPagination } from "../FirebaseUtils/utils";
import NoPage from "./NoPage";

const ArtistsPage = () => {
    let query = new URLSearchParams(useLocation().search);
    let q_page = parseInt(query.get("page") || 1)
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate()

    const getArtists = async (page = q_page) => {
        setLoading(true)
        console.log(page)
        let td = await ArtistsPagination(page);
        console.log(td)
        setData(td);
        setLoading(false)
    }

    useEffect(() => {
        getArtists();
    }, [])

    return <div>
        {
            loading ? <MainLoader /> :
                (data.data.length == 0) ?
                    <NoPage /> :
                    <>
                        <Artists title="Artists" data={data.data} />
                        <div className="pagination-buttons-container">
                            <button className="pagination-button" disabled={data.prev ? false : true} onClick={() => {
                                navigate(`?page=${data.prev}`)
                                getArtists(data.prev)
                                window.scrollTo(0, 0)
                            }}>Prev</button>
                            <button className="pagination-button" disabled={data.next ? false : true} onClick={() => {
                                navigate(`?page=${data.next}`)
                                getArtists(data.next)
                                window.scrollTo(0, 0)
                            }}>Next</button>
                        </div>
                    </>
        }
    </div>
}

export default ArtistsPage;
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSong } from "../Redux/Features/Player/playerSlice";
import ImageLoader from "./ImageLoader";

const Song = ({ thumbnail, artists, title, url, album}) => {
    const dispatch = useDispatch()
    return (
        <li className="single-item" onClick={() => {
            dispatch(setSong({
                thumbnail: thumbnail,
                original_name: title,
                album: album,
                url: url
            }))
        }}>
            <Link data-link data-title="Got What I Got" data-artist={artists} data-img={thumbnail} className="single-item__cover">
                <ImageLoader thumbnail={thumbnail}/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2a3,3,0,0,0-3,3V19a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0ZM8,2A3,3,0,0,0,5,5V19a3,3,0,0,0,6,0V5A3,3,0,0,0,8,2ZM9,19a1,1,0,0,1-2,0V5A1,1,0,0,1,9,5Z" /></svg>
            </Link>
            <div className="single-item__title">
                <h4><Link >{title}</Link></h4>
                <span><Link>{artists}</Link></span>
            </div>
            <Link  className="single-item__add">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" /></svg>
            </Link>
            <Link to={url} className="single-item__export">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z" /></svg>
            </Link>
            {/* <span className="single-item__time">{duration}</span> */}
        </li>
    )
}

const Songs = ({ data }) => {
    return (
        <div className="col-12">
            <ul className="main__list">
                {data.map(item => (
                    <Song
                        key={item.index}
                        thumbnail={item.thumbnail300x300}
                        artists={item.artists.join(", ")}
                        title={item.original_name}
                        url={item.url}
                        album={item.album}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Songs;
import { Link } from "react-router-dom"
import ImageLoader from "./ImageLoader"

const Artist = ({ thumbnail, url, name }) => {
    return (
        <div className="col-6 col-sm-4 col-md-3 col-xl-2">
            <Link to={url} className="artist">
                <div className="artist__cover">
                    <ImageLoader thumbnail={thumbnail}/>
                </div>
                <h3 className="artist__title">{name}</h3>
            </Link>
        </div>
    )
}

const Artists = ({ title, data }) => {
    return (
        <>
            <div className="col-12">
                <div className="main__title main__title--page">
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="row row--grid">
                {data.map(item => (
                    <Artist key={item.name} thumbnail={item.thumbnail300x300} name={item.name} url={item.name}/>
                ))}
            </div>
        </>
    )
}
export { Artist };
export default Artists;
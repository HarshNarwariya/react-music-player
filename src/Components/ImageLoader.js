import { useState } from "react";
import LoaderImg from "../assets/black.jpg"
const ImageLoader = ({ thumbnail }) => {
    const [loading, setLoading] = useState(true);
    const imageStyle = loading ? { display: "none" } : {};
    return <>
        {loading && <img src={LoaderImg} />}
        <img
            style={imageStyle}
            src={thumbnail} onLoad={() => {
                setLoading(false)
            }} />
    </>
}

export default ImageLoader
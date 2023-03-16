import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ImageLoader from "./ImageLoader";

const Player = () => {
    const playerRef = useRef();
    const data = useSelector(state => state.player.data)

    return (
        <>
            <div className="player">
                <div className="player__cover">
                    <ImageLoader thumbnail={data.thumbnail}/>
                </div>
                <div className="player__content">
                    <span className="player__track"><b className="player__title">{data.original_name}</b> – <span className="player__artist">{data.album}</span></span>
                    <audio ref={playerRef} src={data.url} id="audio" controls onCanPlay={() => {
                        if (data.autoPlay) playerRef.current.play()
                    }}/>
                </div>
            </div>
            <button className="player__btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z" /></svg> Player</button>
        </>
    )
}

export default Player;
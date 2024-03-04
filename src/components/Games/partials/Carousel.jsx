export default function Carousel (props) {
    const style={
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 50%, rgba(24, 24, 24)), url(/Games/games__img/${props.gameInfo.imgUrl})`,
    }

    return (

        <>
            <div className="game--carousel">
                <div id="opacity" style={style}></div>
                <h1>{props.gameInfo.title}</h1>
                <p>{props.gameInfo.briefDescription}</p>
            </div>
        </>
    )
}
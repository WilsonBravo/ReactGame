export default function GameCard (props) {
    return (
        <div 
        className="game--card" 
        onMouseEnter={()=> props.changeCarousel(props.gameInfo)}
        onClick={() => props.toggleOpenGame()}
        >
            <img className="game--img" src={`/Games/games__img/${props.gameInfo.imgUrl}`} alt="game Img" />
            <section className="game--description">
                <h3>{props.gameInfo.title}</h3>
                <p>{props.gameInfo.description}</p>
            </section>
        </div>
    )
}
function ImageCard(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.alt} />
        </div>
    );
}

export default ImageCard;

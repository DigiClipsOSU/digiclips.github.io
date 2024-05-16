function ContentCard(props) {
    return (
        <div>
            <h2 className="text-header font-semibold">{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}

export default ContentCard
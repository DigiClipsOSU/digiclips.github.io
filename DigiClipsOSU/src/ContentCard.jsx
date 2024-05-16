function ContentCard(props) {
    return (
        <div>
            <h2 className="text-header font-semibold">{props.title}</h2>
            {props.children}
        </div>
    )
}

export default ContentCard
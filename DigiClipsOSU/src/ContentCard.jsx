function ContentCard({ title, children, className }) {
    return (
        <div className={className}>
            <h2 className="text-header font-semibold">{title}</h2>
            {children}
        </div>
    )
}

export default ContentCard
import { Link } from "react-router-dom"

const Breadcrumb = ({items}) => {
    return (
        <ul className="breadcrumb">
            {items.map(item => (
                <li key={item.title} className="breadcrumb__item"><Link to={item.url}>{item.title}</Link></li>
            ))}
        </ul>
    )
}

export default Breadcrumb;
import { Link } from "react-router";
import { DynamicIcon } from 'lucide-react/dynamic';

const NavLink = ({
    name,
    path,
    icon,
    color

}) => {
    return(
        <li className="flex items-center gap-4">
            <DynamicIcon name={icon} size={30} />
            <Link to={path} className={color}>{name}</Link>
        </li>
    )
}

export default NavLink
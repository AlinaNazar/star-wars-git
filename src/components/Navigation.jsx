import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/constants.js";

const Navigation = ({changePage}) => {
    return (
        <nav className="fixed-top">
            <ul className="nav mt-2 ms-5">
                {navItems.map(item => <NavItem itemTitle={item} key={item} changePage={changePage}/>)}
            </ul>
        </nav>
    )
}

export default Navigation;
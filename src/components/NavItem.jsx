import {useContext} from "react";
import {StarWarsContext} from "../utils/context.js";
import Button from "./ui/Button.jsx";

const NavItem = ({itemTitle}) => {
    const {changePage} = useContext(StarWarsContext);

    return (
        <Button callback={() => changePage(itemTitle)}>{itemTitle}</Button>
    )
    // return (
    //     <div
    //         onClick={() => changePage(itemTitle)}
    //         className="bg-red border-1 px-3 rounded-md cursor-pointer hover:bg-red-800 hover:text-yellow-100 hover: border-main"
    //     >{itemTitle}</div>
    // )
}

export default NavItem;
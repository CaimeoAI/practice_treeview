import { useState } from "react";
import MenuList from "./menu-list";
import "../style/menu-item.css"


//? Component that represents an individual menu item
export default function MenuItem({item}) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel]
        })
    }

    console.log(displayCurrentChildren)

    return (
        <li>
            <div className="item-label">
                <p>{item.label}</p>
                {
                    //? If the item has children, add a '+' sign
                    item && item.children && item.children.length ? 
                    <span onClick={() => handleToggleChildren(item.label)}>+</span>
                    : null
                }
            </div>
            {
                //? If the item has children, recursively render a nested MenuList
                item && item.children && item.children.length > 0 ?
                <MenuList list={item.children} />

                : null

            }
        </li>
    )
}
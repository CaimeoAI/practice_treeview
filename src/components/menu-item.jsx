import { useState } from "react";
import MenuList from "./menu-list";
import "../style/menu-item.css"


//? Component that represents an individual menu item
export default function MenuItem({item}) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    //? Toggles the visibility of child menu items when clicking the '+' sign. It takes the label of the current menu item (getCurrentLabel) and:
    //? Checks if the item is currently expanded or collapsed.
    //? Flips its state (if it was open, it closes; if it was closed, it opens).
    //? Keeps track of the expanded/collapsed state of multiple items by updating the displayCurrentChildren state.
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
                //? If the item has children, and useState displayCurrentChildren label is set to true, recursively render a nested MenuList
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
                <MenuList list={item.children} />

                : null

            }
        </li>
    )
}
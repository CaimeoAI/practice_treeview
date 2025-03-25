import MenuList from "./menu-list";


//? Component that represents an individual menu item
export default function MenuItem({item}) {

    return (
        <li>
            <p>{item.label}</p>

            {
                //? If the item has children, recursively render a nested MenuList
                item && item.children && item.children.length > 0 ?
                    <MenuList list={item.children} />

                : null

            }
        </li>
    )
}
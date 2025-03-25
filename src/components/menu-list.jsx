import MenuItem from "./menu-item"

//? Component that maps over a list of menu items and renders MenuItem for each
export default function MenuList({list = []}){

    return (
        <ul className="menu-list-wrapper">
            {
                list && list.length ?
                list.map((listItem) => 
                    //? Renders each menu item
                    <MenuItem item={listItem} />
                )
                : null
            }
        </ul>
    )
}
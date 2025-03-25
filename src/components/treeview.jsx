import MenuList from "./menu-list"

//? Main component that receives a list of menu items and passes them to MenuList
export default function Treeview({menus = []}) {

    return (
        <div className="treeview-wrapper">
            {/* Renders the root menu list */}
            <MenuList list={menus}/>
        </div>
    )
}
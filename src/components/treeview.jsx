import MenuList from "./menu-list"


export default function Treeview({menus = []}) {

    return (
        <div className="treeview-wrapper">
            <MenuList list={menus}/>
        </div>
    )
}
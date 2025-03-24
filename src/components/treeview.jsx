


export default function Treeview({menus = []}) {

    return (
        <div className="treeview-wrapper">
            <MenuList list={menus}/>
        </div>
    )
}
import MenuItem from "./menu-item"


export default function MenuList({list = []}){

    return (
        <div className="menu-list-wrapper">
            {
                list && list.length ?
                list.map((listItem) => 
                    <MenuItem item={listItem} />
                )
                : null
            }
        </div>
    )
}
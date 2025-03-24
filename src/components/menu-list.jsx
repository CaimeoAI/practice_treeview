


export default function MenuList({list = []}){

    return (
        <div className="menu-list-wrapper">
            {
                list && list.length ?
                null

                : null
            }
        </div>
    )
}
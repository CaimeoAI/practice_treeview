import Treeview from "./components/treeview"
import menus from "./constants/data"

function App() {
  
  return (
    <div>
      <Treeview menus={menus}/>
    </div>
  )
}

export default App

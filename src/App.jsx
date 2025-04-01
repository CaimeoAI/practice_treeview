import Treeview from "./components/treeview"
import menus from "./constants/data"
import "./App.css"

function App() {
  
  return (
    <div className="treeview-wrapper">
      <Treeview menus={menus}/>
    </div>
  )
}

export default App

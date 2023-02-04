import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
// import Navbar from "../../components/navbar/Navbar"
// import Datatable from "../../components/datatable/UserTable"
import UserTable from "../../components/datatable/UserTable"
import BgmiTable from "../../components/datatable/BgmiTable"
import ValorantTable from "../../components/datatable/ValorantTable"
import CsTable from "../../components/datatable/CsTable"
import BallPoolTable from "../../components/datatable/BallPoolTable"
import NFSTable from "../../components/datatable/NFSTable"

const List = (props) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        {/* <Navbar/> */}
        {
          props.users === true ? <UserTable/> 
          : props.bgmi === true ? <BgmiTable/>
          : props.valorant === true ? <ValorantTable/>
          : props.cs === true ? <CsTable/>
          : props.ballpool === true ? <BallPoolTable/>
          : props.nfs === true ? <NFSTable/>
          : null 
        }
        
      </div>
    </div>
  )
}

export default List
import ChatNav from "./ChatNav";
import Search from "./Search";

const Sidebar = () => {
    return (
        <div className = 'sidebar' >
            <ChatNav/>
            <Search/>
        </div>
      );
}
 
export default Sidebar;
import ChatNav from "./ChatNav";
import Chats from "./Chats";
import Search from "./Search";

const Sidebar = () => {
    return (
        <div className = 'sidebar' >
            <ChatNav/>
            <Search/>
            <Chats/>
        </div>
      );
}
 
export default Sidebar;
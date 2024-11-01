import Chat from './ChatComponents/Chat';
import Sidebar from './ChatComponents/Sidebar';
import Search from './ChatComponents/Search';
const ChatComponent = () => {
    return ( 
        <div className="chat-component">
            <div className = 'container'>
                <Sidebar/>
                <Chat/>
            </div>

        </div>
     );
}
 
export default ChatComponent;
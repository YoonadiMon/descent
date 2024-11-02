import Chat from './ChatComponents/Chat';
import Sidebar from './ChatComponents/Sidebar';
import Home from './ChatComponents/Home'
const ChatComponent = () => {
    return ( 
        <div className="chat-component">
            <div className = 'container'>
                <Sidebar/>
                <Chat/>
                <Home/>
            </div>

        </div>
     );
}
 
export default ChatComponent;
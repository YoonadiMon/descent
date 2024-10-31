import Chat from './ChatComponents/Chat';
import Sidebar from './ChatComponents/Sidebar';
const ChatComponent = () => {
    return ( 
        <div className="chat-component">
            <h2>Talk to people!!!!</h2>
            <Sidebar/>
            <Chat/>
        </div>
     );
}
 
export default ChatComponent;
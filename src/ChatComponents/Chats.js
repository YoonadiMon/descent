import scubadiver from './scuba_diver.png';
const Chats = () => {
    return ( 
        <div className="chats">
            <div className = 'userChat'>
                <img className = 'profilepic' src = {scubadiver} alt = 'scubadiver'></img>
            </div>
            <div className = 'userChatInfo'>
                <span>Jane Doe</span>
            </div>
        </div>
     );
}
 
export default Chats;
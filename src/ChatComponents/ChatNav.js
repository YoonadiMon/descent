import scubadiver from './scuba_diver.png'
const ChatNav = () => {
    return ( 
        <div className = 'chatNav'>
            <span className = 'logo'>The chat</span>
            <div className = 'user'>
                <img className = 'profilepic'src = {scubadiver} alt = "skubadiver"/>
                <span>John</span>
                <button>Logout</button>
            </div>
        </div>
     );
}
 
export default ChatNav;
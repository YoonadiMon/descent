import logo from './images/logo.png'; 
import facebook from './images/facebook-brands-solid.svg';
import instagram from './images/instagram-brands-solid.svg';
import twitter from './images/twitter-brands-solid.svg';
import linkedin from './images/linkedin-brands-solid.svg';
import waves from './images/waves.png';
import waves2 from './images/waves2.png';

const Text  = () => {
    return (  
        <div className="text">
            
            <img src={waves2}
            style={{
                "transform": "scaleY(-1)",
                "background": "transparent",
                "width": "100%"
            }}/>
            <h2>About us &#127754;</h2>
            <div className = 'long'>
                <div
                style={{
                    "margin": "20px",
                    "padding": "10px",
                }}>
                    <b
                    style={{
                        "color": "#020887"
                    }}>Descent</b><img src={logo}
                    style={{
                        "width": "30px",
                        "position": "relative",
                        "top": "8px"
                    }}/> is an innovative platform that brings together divers from around the globe to take an active role in marine preservation.
                </div>
                
                <div style={{
                    "textAlign": "justify",
                    "padding": "10px"
                }}>
                &emsp;&emsp;Recognizing the vital importance of the ocean for maintaining a balanced ecosystem, <i>Descent</i> connects divers passionate about environmental protection with initiatives to clean, restore, and monitor marine habitats. The app creates a network of eco-conscious divers who can engage in coordinated activities like underwater cleanups, coral reef monitoring, and seagrass restoration. By leveraging the collective efforts of this community, Descent aims to make a tangible impact on the health of our oceans.
                </div> 
                <img src={waves}
                style={{
                    "transform": "scaleY(-1)"
                }}/>
                <div
                style={{
                    "position": "relative",
                    "top": "-6px",
                    "backgroundColor": "#020887",
                    "padding": "30px 20px 50px 20px",
                    "color": "#fff"
                }}>
                    The concept behind Descent is grounded in the principle of community-driven conservation. With oceanic habitats facing increasing threats from pollution, overfishing, and climate change, individual efforts—while commendable—often have limited reach. Descent addresses this challenge by enabling divers to contribute to a shared purpose and amplifies the impact of their conservation activities through real-time coordination, education, and support. <br/><br/>

                    Descent’s user experience is centered around planning and executing dives or cleanup events. Upon opening the app, users can explore upcoming dives or conservation events hosted in various locations. Divers can either join existing cleanups or create a new event, specifying details like location, time, required equipment, and environmental focus (e.g., plastic cleanup, coral rehabilitation). Once the dive or cleanup begins, Descent provides a streamlined interface for participants to check in, log findings, and report the quantity and types of waste collected or environmental conditions observed. Users can document their contributions and view community-wide metrics that showcase the collective impact of Descent’s network.<br/><br/>

                    Through community engagement and accessible dive coordination, Descent empowers divers to protect and restore the marine world, making it a valuable tool for eco-conscious adventurers and ocean lovers alike.<br/><br/>
                </div>
            </div>
            
            <div className='contacts'
            style={{
                "display": "flex",
                "justifyContent": "center",
                "padding": "10px",
                "border": "2px solid #020887"
            }}>
                <a href='https://en.wikipedia.org/wiki/Facebook'><img src={facebook} alt='facebook-icon'
                style={{
                    "width": "30px",
                    "marginRight": "16px"
                }}/></a>
                <a href='https://en.wikipedia.org/wiki/Instagram'><img src={instagram} alt='instagram-icon'
                style={{
                    "width": "30px",
                    "marginRight": "16px"
                }}/></a>
                <a href='https://en.wikipedia.org/wiki/Twitter'><img src={twitter} alt='twitter-icon'
                style={{
                    "width": "30px",
                    "marginRight": "16px"
                }}/></a>
                <a href='https://en.wikipedia.org/wiki/LinkedIn'><img src={linkedin} alt='linkedin-icon'
                style={{
                    "width": "30px",
                    "marginRight": "16px"
                }}/></a>
            </div>
            
        </div>
    );
}
 
export default Text;
import "./Nav.css"
import "./assets/logo.svg";

function Nav(props) { 
    return (
        <div id="navbar">
            
            <div id="left">
                <img src="./assets/logo.svg"/>
                <h1>GeekFoods</h1>
            </div>
            
            <div id="mid">
                    
                <div id="home"><a id="home2" href={props.pageNumber}>Home</a></div>  
                {/* isko anchor tag se hatana parega warna page refresh hoga and ispe onlick lagana parega onClick={function} */}
                <div id="quote"><a id="quote2" href={props.pageNumber}>Quote</a></div>
                <div id="restaurant"><a id="restaurant2" href="#">Restaurant</a></div>
                <div id="foods"><a id="foods2" href="#">Foods</a></div>
                <div id="contact"><a id="contact2" href="#">Contact</a></div>

            </div>
            
            <div id="right">
            
                <div id="button-container">
                    <button type="submit">Get Started</button>
                </div>
            </div>

            <div id="menu-icon-phone-view">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    );
}

export default Nav;
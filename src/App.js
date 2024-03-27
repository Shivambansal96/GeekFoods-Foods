import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import LandingPage from "./components/screens/LandingPage.jsx";
import QuoteScreen from "./components/screens/QuoteScreen.jsx";

function App() {

  const [page, setPage] = useState(1);
  // function which will get a ID

  return (
    
    <div className="App">
     {/* {
      page == 0?<LandingPage />:(page == 1?<QuoteScreen />:null)
     }  */}

     <Nav />
     

    </div>  
    
  );
}



export default App;
  
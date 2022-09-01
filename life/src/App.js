import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/components/Navbar"
import Projects from "./navbar/pages/Projects"
import ToDo from "./navbar/pages/ToDo"
import Budget from "./navbar/pages/Budget"
import Fitness from "./navbar/pages/Fitness"
function App() {
  return (
    <Router>
      <Navbar />
	  	<Routes>
		  	<Route path='/' exact component={Projects} />
        	<Route path='/ToDo' component={ToDo} />
        	<Route path='/Budget' component={Budget} />
        	<Route path='/Fitness' component={Fitness} />
	  	</Routes>
    </Router>
  );
}

export default App;
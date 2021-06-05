import {
    BrowserRouter as Router,
    Route,
    Switch,
    // HashRouter,
} from "react-router-dom";

import Footer from "./containers/Footer/Footer";
import Navbar from "./containers/Navbar/Navbar";
import DrinkWater from "./pages/DrinkWater/DrinkWater";
import Homepage from "./pages/Home/Homepage";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/Drink-water/drinkwater">
                    <DrinkWater />
                </Route>
                <Route path={"/Drink-water"}>
                    <Homepage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;

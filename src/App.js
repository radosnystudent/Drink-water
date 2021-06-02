import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./containers/Footer/Footer";
import Navbar from "./containers/Navbar/Navbar";
import DrinkWater from "./pages/DrinkWater/DrinkWater";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/">
                    <DrinkWater />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;

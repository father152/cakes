import { Home } from "./component/Home/Home";
import { Route, BrowserRouter, Router } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Router>
            <Route>
              <Route to='/' element='' />
            </Route>
          </Router>

          <Home />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Show from "./components/Show";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Detail from "./components/Detail";
import TodoContext from "./context/TodoContext";

const App = () => {
    return (
        <div>
            <Nav />
          
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
              
                <Route path="/show" element={<Show />}>
                    <Route path="/show/:id" element={<Detail />} />
                </Route>

                <Route
                    path="*"
                    element={
                        <h1 className="text-center mt-10 text-3xl text-red-400">
                            Page Not Found
                        </h1>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
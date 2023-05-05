import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Pages/Detail";
import Header from "./Pages/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/tv/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

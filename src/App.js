import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Main from "./components/common/Main";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Member/Login";
import Join from "./components/Member/Join";
import Join2 from "./components/Member/Join2";
import PlannerFrm from "./components/planner/PlannerFrm";

function App() {
  return (
    <div className="wrap">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/join2" element={<Join2 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

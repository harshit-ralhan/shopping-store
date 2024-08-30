import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <div className="bg">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;

import Header from "../components/navigation/Header";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

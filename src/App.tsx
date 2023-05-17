import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import HomeDay from "./pages/HomeDay";
import HomeMonth from "./pages/HomeMonth";
import HomeYear from "./pages/HomeYear";
import SignUp from "./pages/SignUp";
import UserProfile from "./pages/UserProfile";
import Comparison from "./pages/Comparison";
import History1 from "./pages/History1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home-day":
        title = "";
        metaDescription = "";
        break;
      case "/home-month":
        title = "";
        metaDescription = "";
        break;
      case "/home-year":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/user-profile":
        title = "";
        metaDescription = "";
        break;
      case "/comparison":
        title = "";
        metaDescription = "";
        break;
      case "/history":
        title = "";
        metaDescription = "";
        break;
      case "/v1mesec-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/v1leto-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/v1danes-dashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home-day" element={<HomeDay />} />
      <Route path="/home-month" element={<HomeMonth />} />
      <Route path="/home-year" element={<HomeYear />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/comparison" element={<Comparison />} />
      <Route path="/history" element={<History1 />} />
    </Routes>
  );
}
export default App;

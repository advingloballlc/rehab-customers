import { authSelectors } from "../../redux/auth";
import { useSelector } from "react-redux";
import PatientsPage from "../PatientsPage/PatientsPage";
import Home from "../Home/Home";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <header>{isLoggedIn ? <PatientsPage /> : <Home />}</header>
    </>
  );
}

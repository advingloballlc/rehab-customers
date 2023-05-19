import { Suspense } from "react";
import { useSelector } from "react-redux";
import PatientsPage from "../PatientsPage/PatientsPage";
import Home from "../Home/Home";
import { authSelectors } from "../../redux/auth";
import { Outlet } from "react-router-dom";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <header>{isLoggedIn ? <PatientsPage /> : <Home />}</header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

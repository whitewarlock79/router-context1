import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const NavBar = () => {
  const { user, setUser } = useUserContext();

  const navigate = useNavigate();

  return (
    <nav
      style={{
        backgroundColor: "#f8f9fa",
        padding: "1rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#0d6efd" : "#333",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "1.1rem",
            transition: "color 0.2s ease",
          })}
        >
          Home
        </NavLink>

        {user && (
          <>
            <NavLink
              to="/dashboard"
              style={({ isActive }) => ({
                color: isActive ? "#0d6efd" : "#333",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1.1rem",
                transition: "color 0.2s ease",
              })}
            >
              Dashboard
            </NavLink>
            <button
              onClick={() => {
                setUser(false);
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

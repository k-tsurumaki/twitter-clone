import { auth, provider } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Logout({ setIsAuth }) {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <div>
      <p>Logout</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Logout;

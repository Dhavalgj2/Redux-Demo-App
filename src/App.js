import { Fragment } from "react";
// import Counter from "./components/Counter";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
function App() {
  const AuthState = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!AuthState ? <Auth /> : <UserProfile />}
      {/* <Counter />; */}
    </Fragment>
  );
}

export default App;
